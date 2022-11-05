import { Button } from '../../components';

export const SettingsSecurityPrivacy = () => {
  return (
    <div className="w-[100%] flex flex-col">
      <div className="flex flex-col pb-[40px]">
        <p className="h3">Show recovery passphrase</p>
        <Button
          title="Show passphrase"
          mode="gradient"
          onClick={() => console.log('asd')}
          className="w-[280px] mt-[16px]"
        />
      </div>
      <div className="flex flex-col">
        <p className="h3">Reset wallet</p>
        <Button
          title="Reset wallet"
          mode="gradient"
          onClick={() => console.log('asd')}
          className="w-[280px] mt-[16px]"
        />
      </div>
    </div>
  );
};