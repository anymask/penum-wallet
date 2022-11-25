import { ValidatorInfo } from '@buf/bufbuild_connect-web_penumbra-zone_penumbra/penumbra/core/stake/v1alpha1/stake_pb';
import { useEffect, useState } from 'react';
import { useAccountsSelector } from '../../../accounts';
import { Input, SearchSvg, Select, ValidatorTable } from '../../components';
import { selectNetworks } from '../../redux';

type AllValidatorsProps = {
  validators: ValidatorInfo[];
};

enum ValidatorsState {
  VALIDATOR_STATE_ENUM_UNSPECIFIED = 0,
  VALIDATOR_STATE_ENUM_INACTIVE = 1,
  VALIDATOR_STATE_ENUM_ACTIVE = 2,
  VALIDATOR_STATE_ENUM_JAILED = 3,
  VALIDATOR_STATE_ENUM_TOMBSTONED = 4,
  VALIDATOR_STATE_ENUM_DISABLED = 5,
}

const filterValidator = (validator: ValidatorInfo[], filter: number) =>
  validator.filter((v) => v.status.state.state === filter);

export const AllValidators: React.FC<AllValidatorsProps> = ({ validators }) => {
  const networks = useAccountsSelector(selectNetworks);
  const [search, setSearch] = useState<string>('');
  const [totalValidators, setTotalValidators] = useState<number | null>(null);
  const [tableData, setTableData] = useState([]);

  const getValidatorsCount = async () => {
    try {
      const response = await fetch(`${networks[0].tendermint}/validators`);
      const data = await response.json();
      setTotalValidators(+data.result.total);
    } catch (error) {}
  };

  useEffect(() => {
    getValidatorsCount();
  }, [networks]);

  useEffect(() => {
    if (totalValidators && validators.length > totalValidators)
      setTotalValidators(validators.length);
  }, [validators]);

  useEffect(() => {
    if (validators.length === totalValidators) {
      const d = validators.map((i, index) => ({
        name: i.validator.name,
        votingPower: i.status.votingPower,
        //TODO add commision
        commission: 0,
        arp: 0,
      }));
      setTableData(d);
    }
  }, [validators, totalValidators]);

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(event.target.value);

  const options = [
    {
      value: ValidatorsState.VALIDATOR_STATE_ENUM_ACTIVE,
      label: `Active (${
        filterValidator(validators, ValidatorsState.VALIDATOR_STATE_ENUM_ACTIVE)
          .length
      })`,
    },
    {
      value: ValidatorsState.VALIDATOR_STATE_ENUM_UNSPECIFIED,
      label: `Unspecified (${
        filterValidator(
          validators,
          ValidatorsState.VALIDATOR_STATE_ENUM_UNSPECIFIED
        ).length
      })`,
    },
    {
      value: ValidatorsState.VALIDATOR_STATE_ENUM_INACTIVE,
      label: `Inactive (${
        filterValidator(
          validators,
          ValidatorsState.VALIDATOR_STATE_ENUM_INACTIVE
        ).length
      })`,
    },
    {
      value: ValidatorsState.VALIDATOR_STATE_ENUM_JAILED,
      label: `Jailed (${
        filterValidator(validators, ValidatorsState.VALIDATOR_STATE_ENUM_JAILED)
          .length
      })`,
    },
    {
      value: ValidatorsState.VALIDATOR_STATE_ENUM_TOMBSTONED,
      label: `Tombstoned (${
        filterValidator(
          validators,
          ValidatorsState.VALIDATOR_STATE_ENUM_TOMBSTONED
        ).length
      })`,
    },
    {
      value: ValidatorsState.VALIDATOR_STATE_ENUM_DISABLED,
      label: `Disabled (${
        filterValidator(
          validators,
          ValidatorsState.VALIDATOR_STATE_ENUM_DISABLED
        ).length
      })`,
    },
    {
      value: 'all',
      label: `All (${validators.length})`,
    },
  ];

  const handleChangeSelect = (value: string) => {
    console.log(value);
  };

  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), 'en', {
            numeric: true,
          }) * (sortOrder === 'asc' ? 1 : -1)
        );
      });
      setTableData(sorted);
    }
  };

  return (
    <div className="flex flex-col mt-[26px]">
      <div className="flex items-center justify-between mb-[24px]">
        <Input
          placeholder="Search validators"
          value={search}
          onChange={handleChangeSearch}
          leftSvg={
            <span className="ml-[24px] mr-[9px]">
              <SearchSvg />
            </span>
          }
          className="w-[400px]"
        />
        <Select
          options={totalValidators === validators.length ? options : []}
          handleChange={handleChangeSelect}
          className="w-[192px]"
          initialValue={
            totalValidators === validators.length
              ? ValidatorsState.VALIDATOR_STATE_ENUM_ACTIVE
              : undefined
          }
        />
      </div>
      <ValidatorTable data={tableData} handleSorting={handleSorting} />
    </div>
  );
};