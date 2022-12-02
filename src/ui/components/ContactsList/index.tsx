import { Contact } from '../../../controllers';
import { useMediaQuery } from '../../../hooks';
import { getShortKey } from '../../../utils';

type ContactsListProps = {
  list: { [key: string]: Contact[] };
  handleSelect: (c: Contact) => () => void
};

export const ContactsList: React.FC<ContactsListProps> = ({ list, handleSelect }) => {
  const isDesktop = useMediaQuery();
  return (
    <div className="w-[100%] py-[24px]">
      {Object.keys(list)
        .sort()
        .map((i) => {
          return (
            <div key={i} className="flex flex-col">
              <p
                className={`mb-[8px] mx-[16px] px-[16px] ext:py-[10px] tablet:py-[8px] bg-dark_grey rounded-[15px] ${
                  isDesktop ? 'h3' : 'h2_ext'
                }`}
              >
                {i}
              </p>
              <div className="mb-[16px]">
                {list[i].map((c: Contact) => {
                  return (
                    <div
                      className="flex items-center px-[16px] cursor-pointer hover:bg-dark_grey my-[8px]"
                      key={c.address}
                      onClick={handleSelect(c)}
                    >
                      <div className="w-[36px] h-[36px] li_gradient rounded-[50%] flex items-center justify-center mr-[8px]">
                        <div className="w-[35px] h-[35px]  bg-brown rounded-[50%] flex items-center justify-center"></div>
                      </div>
                      <div className="flex flex-col">
                        <p className={`${isDesktop ? 'h3' : 'h2_ext'}`}>
                          {c.name}
                        </p>
                        <p className="text_body text-light_grey">
                          {getShortKey(c.address)}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
    </div>
  );
};
