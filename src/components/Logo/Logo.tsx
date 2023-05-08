import { RocketLogo } from "./RocketLogo";
export const Logo = () => {
  return (
    <div className="logo">
      <RocketLogo width={22} height={36} />
      <h2 className="logo-title">
        Lista<span>X</span>
      </h2>
    </div>
  );
};
