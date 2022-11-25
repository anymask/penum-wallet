export const DowmloadSvg = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
        stroke={props.stroke || 'white'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 10L12 15L17 10"
        stroke={props.stroke || 'white'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15V3"
        stroke={props.stroke || 'white'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const PlusSvg = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 5V19"
        stroke="#E0E0E0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 12H19"
        stroke="#E0E0E0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ChevronLeftIcon = (props) => {
  return (
    <svg
      width={props.width || '24'}
      height={props.height || '24'}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 18L9 12L15 6"
        stroke={props.stroke || 'white'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CheckSvg = (props) => {
  return (
    <svg
      width={props.width || '24'}
      height={props.height || '24'}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.5 6.41L10.5 18.41L5 12.91L6.41 11.5L10.5 15.58L21.09 5L22.5 6.41Z"
        fill={props.fill || 'white'}
      />
    </svg>
  );
};

export const CloseSvg = (props) => {
  return (
    <svg
      width={props.width || '12'}
      height={props.height || '12'}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.5 3.205L8.795 2.5L6 5.295L3.205 2.5L2.5 3.205L5.295 6L2.5 8.795L3.205 9.5L6 6.705L8.795 9.5L9.5 8.795L6.705 6L9.5 3.205Z"
        fill={props.fill || '#870606'}
      />
    </svg>
  );
};

export const CloseEyeSvg = () => {
  return (
    <svg
      width="22"
      height="18"
      viewBox="0 0 22 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1.27L2.28 0L19 16.72L17.73 18L14.65 14.92C13.5 15.3 12.28 15.5 11 15.5C6 15.5 1.73 12.39 0 8C0.69 6.24 1.79 4.69 3.19 3.46L1 1.27ZM11 5C11.7956 5 12.5587 5.31607 13.1213 5.87868C13.6839 6.44129 14 7.20435 14 8C14 8.35 13.94 8.69 13.83 9L10 5.17C10.31 5.06 10.65 5 11 5ZM11 0.5C16 0.5 20.27 3.61 22 8C21.18 10.08 19.79 11.88 18 13.19L16.58 11.76C17.94 10.82 19.06 9.54 19.82 8C18.17 4.64 14.76 2.5 11 2.5C9.91 2.5 8.84 2.68 7.84 3L6.3 1.47C7.74 0.85 9.33 0.5 11 0.5ZM2.18 8C3.83 11.36 7.24 13.5 11 13.5C11.69 13.5 12.37 13.43 13 13.29L10.72 11C9.29 10.85 8.15 9.71 8 8.28L4.6 4.87C3.61 5.72 2.78 6.78 2.18 8Z"
        fill="#524B4B"
      />
    </svg>
  );
};

export const OpenEyeSvg = () => {
  return (
    <svg
      width="22"
      height="16"
      viewBox="0 0 22 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 5C11.7956 5 12.5587 5.31607 13.1213 5.87868C13.6839 6.44129 14 7.20435 14 8C14 8.79565 13.6839 9.55871 13.1213 10.1213C12.5587 10.6839 11.7956 11 11 11C10.2044 11 9.44129 10.6839 8.87868 10.1213C8.31607 9.55871 8 8.79565 8 8C8 7.20435 8.31607 6.44129 8.87868 5.87868C9.44129 5.31607 10.2044 5 11 5ZM11 0.5C16 0.5 20.27 3.61 22 8C20.27 12.39 16 15.5 11 15.5C6 15.5 1.73 12.39 0 8C1.73 3.61 6 0.5 11 0.5ZM2.18 8C3.83 11.36 7.24 13.5 11 13.5C14.76 13.5 18.17 11.36 19.82 8C18.17 4.64 14.76 2.5 11 2.5C7.24 2.5 3.83 4.64 2.18 8Z"
        fill="white"
      />
    </svg>
  );
};

export const InformationOutlineSvg = (props) => {
  return (
    <svg
      width={props.width || '24'}
      height={props.height || '24'}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 9H13V7H11M12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM11 17H13V11H11V17Z"
        fill={props.fill || 'white'}
      />
    </svg>
  );
};

export const DotsSvg = () => {
  return (
    <svg
      width="4"
      height="16"
      viewBox="0 0 4 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 12C2.53043 12 3.03914 12.2107 3.41421 12.5858C3.78929 12.9609 4 13.4696 4 14C4 14.5304 3.78929 15.0391 3.41421 15.4142C3.03914 15.7893 2.53043 16 2 16C1.46957 16 0.960859 15.7893 0.585787 15.4142C0.210714 15.0391 0 14.5304 0 14C0 13.4696 0.210714 12.9609 0.585787 12.5858C0.960859 12.2107 1.46957 12 2 12ZM2 6C2.53043 6 3.03914 6.21071 3.41421 6.58579C3.78929 6.96086 4 7.46957 4 8C4 8.53043 3.78929 9.03914 3.41421 9.41421C3.03914 9.78928 2.53043 10 2 10C1.46957 10 0.960859 9.78928 0.585787 9.41421C0.210714 9.03914 0 8.53043 0 8C0 7.46957 0.210714 6.96086 0.585787 6.58579C0.960859 6.21071 1.46957 6 2 6ZM2 0C2.53043 0 3.03914 0.210714 3.41421 0.585786C3.78929 0.960859 4 1.46957 4 2C4 2.53043 3.78929 3.03914 3.41421 3.41421C3.03914 3.78929 2.53043 4 2 4C1.46957 4 0.960859 3.78929 0.585787 3.41421C0.210714 3.03914 0 2.53043 0 2C0 1.46957 0.210714 0.960859 0.585787 0.585786C0.960859 0.210714 1.46957 0 2 0Z"
        fill="white"
      />
    </svg>
  );
};

export const CopySvg = (props) => {
  return (
    <svg
      width={props.width || '12'}
      height={props.height || '12'}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.5 10.5H4V3.5H9.5M9.5 2.5H4C3.73478 2.5 3.48043 2.60536 3.29289 2.79289C3.10536 2.98043 3 3.23478 3 3.5V10.5C3 10.7652 3.10536 11.0196 3.29289 11.2071C3.48043 11.3946 3.73478 11.5 4 11.5H9.5C9.76522 11.5 10.0196 11.3946 10.2071 11.2071C10.3946 11.0196 10.5 10.7652 10.5 10.5V3.5C10.5 3.23478 10.3946 2.98043 10.2071 2.79289C10.0196 2.60536 9.76522 2.5 9.5 2.5ZM8 0.5H2C1.73478 0.5 1.48043 0.605357 1.29289 0.792893C1.10536 0.98043 1 1.23478 1 1.5V8.5H2V1.5H8V0.5Z"
        fill={props.fill || 'white'}
      />
    </svg>
  );
};

export const ArrowUpRightSvg = () => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 17L17.5 7"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 7H17.5V17"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CachedSvg = () => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.5 8L15.5 12H18.5C18.5 13.5913 17.8679 15.1174 16.7426 16.2426C15.6174 17.3679 14.0913 18 12.5 18C11.5 18 10.53 17.75 9.7 17.3L8.24 18.76C9.47 19.54 10.93 20 12.5 20C14.6217 20 16.6566 19.1571 18.1569 17.6569C19.6571 16.1566 20.5 14.1217 20.5 12H23.5M6.5 12C6.5 10.4087 7.13214 8.88258 8.25736 7.75736C9.38258 6.63214 10.9087 6 12.5 6C13.5 6 14.47 6.25 15.3 6.7L16.76 5.24C15.53 4.46 14.07 4 12.5 4C10.3783 4 8.34344 4.84285 6.84315 6.34315C5.34285 7.84344 4.5 9.87827 4.5 12H1.5L5.5 16L9.5 12"
        fill="white"
      />
    </svg>
  );
};

export const SupportSvg = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.99984 2.5C5.4165 2.5 1.6665 5.48333 1.6665 9.16667C1.70817 10.9583 2.54984 12.6417 3.95817 13.75C3.95817 14.25 3.60817 15.5583 1.6665 17.5C3.6415 17.4083 5.53317 16.6667 7.05817 15.4167C8.00817 15.6917 9.00817 15.8333 9.99984 15.8333C14.5832 15.8333 18.3332 12.85 18.3332 9.16667C18.3332 5.48333 14.5832 2.5 9.99984 2.5ZM9.99984 14.1667C6.3165 14.1667 3.33317 11.925 3.33317 9.16667C3.33317 6.40833 6.3165 4.16667 9.99984 4.16667C13.6832 4.16667 16.6665 6.40833 16.6665 9.16667C16.6665 11.925 13.6832 14.1667 9.99984 14.1667Z"
        fill="#E0E0E0"
      />
    </svg>
  );
};

export const SettingsSvg = (props) => {
  return (
    <svg
      width={props.width || '20'}
      height={props.height || '20'}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_249_1648)">
        <path
          d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
          stroke="#E0E0E0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.1668 12.5C16.0559 12.7513 16.0228 13.0301 16.0718 13.3005C16.1208 13.5708 16.2497 13.8202 16.4418 14.0166L16.4918 14.0666C16.6468 14.2214 16.7697 14.4052 16.8536 14.6076C16.9375 14.8099 16.9806 15.0268 16.9806 15.2458C16.9806 15.4648 16.9375 15.6817 16.8536 15.884C16.7697 16.0864 16.6468 16.2702 16.4918 16.425C16.337 16.5799 16.1532 16.7029 15.9509 16.7867C15.7486 16.8706 15.5317 16.9138 15.3127 16.9138C15.0936 16.9138 14.8768 16.8706 14.6744 16.7867C14.4721 16.7029 14.2883 16.5799 14.1335 16.425L14.0835 16.375C13.8871 16.1829 13.6376 16.054 13.3673 16.005C13.097 15.956 12.8182 15.9891 12.5668 16.1C12.3204 16.2056 12.1101 16.381 11.9621 16.6046C11.814 16.8282 11.7346 17.0902 11.7335 17.3583V17.5C11.7335 17.942 11.5579 18.3659 11.2453 18.6785C10.9328 18.9911 10.5089 19.1666 10.0668 19.1666C9.6248 19.1666 9.20088 18.9911 8.88832 18.6785C8.57576 18.3659 8.40016 17.942 8.40016 17.5V17.425C8.39371 17.1492 8.30443 16.8816 8.14392 16.6572C7.98342 16.4328 7.75911 16.2619 7.50016 16.1666C7.24882 16.0557 6.97 16.0226 6.69967 16.0716C6.42934 16.1207 6.1799 16.2495 5.9835 16.4416L5.9335 16.4916C5.77871 16.6466 5.59489 16.7695 5.39256 16.8534C5.19023 16.9373 4.97336 16.9805 4.75433 16.9805C4.5353 16.9805 4.31843 16.9373 4.1161 16.8534C3.91377 16.7695 3.72995 16.6466 3.57516 16.4916C3.4202 16.3369 3.29727 16.153 3.2134 15.9507C3.12952 15.7484 3.08635 15.5315 3.08635 15.3125C3.08635 15.0935 3.12952 14.8766 3.2134 14.6742C3.29727 14.4719 3.4202 14.2881 3.57516 14.1333L3.62516 14.0833C3.81728 13.8869 3.94615 13.6375 3.99517 13.3671C4.04418 13.0968 4.01109 12.818 3.90016 12.5666C3.79453 12.3202 3.61913 12.11 3.39555 11.9619C3.17198 11.8138 2.90999 11.7344 2.64183 11.7333H2.50016C2.05814 11.7333 1.63421 11.5577 1.32165 11.2452C1.00909 10.9326 0.833496 10.5087 0.833496 10.0666C0.833496 9.62462 1.00909 9.2007 1.32165 8.88814C1.63421 8.57558 2.05814 8.39998 2.50016 8.39998H2.57516C2.85099 8.39353 3.1185 8.30425 3.34291 8.14374C3.56732 7.98323 3.73826 7.75893 3.8335 7.49998C3.94443 7.24863 3.97752 6.96982 3.9285 6.69949C3.87948 6.42916 3.75061 6.17971 3.5585 5.98331L3.5085 5.93331C3.35354 5.77852 3.2306 5.59471 3.14673 5.39238C3.06286 5.19005 3.01969 4.97317 3.01969 4.75415C3.01969 4.53512 3.06286 4.31824 3.14673 4.11591C3.2306 3.91358 3.35354 3.72977 3.5085 3.57498C3.66328 3.42002 3.8471 3.29709 4.04943 3.21321C4.25176 3.12934 4.46864 3.08617 4.68766 3.08617C4.90669 3.08617 5.12357 3.12934 5.3259 3.21321C5.52823 3.29709 5.71204 3.42002 5.86683 3.57498L5.91683 3.62498C6.11323 3.81709 6.36268 3.94597 6.63301 3.99498C6.90333 4.044 7.18215 4.01091 7.4335 3.89998H7.50016C7.74664 3.79434 7.95684 3.61894 8.10491 3.39537C8.25297 3.17179 8.33243 2.9098 8.3335 2.64165V2.49998C8.3335 2.05795 8.50909 1.63403 8.82165 1.32147C9.13421 1.00891 9.55814 0.833313 10.0002 0.833313C10.4422 0.833313 10.8661 1.00891 11.1787 1.32147C11.4912 1.63403 11.6668 2.05795 11.6668 2.49998V2.57498C11.6679 2.84314 11.7474 3.10513 11.8954 3.3287C12.0435 3.55228 12.2537 3.72768 12.5002 3.83331C12.7515 3.94424 13.0303 3.97733 13.3007 3.92832C13.571 3.8793 13.8204 3.75043 14.0168 3.55831L14.0668 3.50831C14.2216 3.35335 14.4054 3.23042 14.6078 3.14655C14.8101 3.06267 15.027 3.0195 15.246 3.0195C15.465 3.0195 15.6819 3.06267 15.8842 3.14655C16.0866 3.23042 16.2704 3.35335 16.4252 3.50831C16.5801 3.6631 16.7031 3.84692 16.7869 4.04925C16.8708 4.25158 16.914 4.46845 16.914 4.68748C16.914 4.90651 16.8708 5.12338 16.7869 5.32571C16.7031 5.52804 16.5801 5.71186 16.4252 5.86665L16.3752 5.91665C16.183 6.11305 16.0542 6.36249 16.0052 6.63282C15.9561 6.90315 15.9892 7.18197 16.1002 7.43331V7.49998C16.2058 7.74645 16.3812 7.95666 16.6048 8.10472C16.8284 8.25279 17.0903 8.33224 17.3585 8.33331H17.5002C17.9422 8.33331 18.3661 8.50891 18.6787 8.82147C18.9912 9.13403 19.1668 9.55795 19.1668 9.99998C19.1668 10.442 18.9912 10.8659 18.6787 11.1785C18.3661 11.4911 17.9422 11.6666 17.5002 11.6666H17.4252C17.157 11.6677 16.895 11.7472 16.6714 11.8952C16.4479 12.0433 16.2725 12.2535 16.1668 12.5V12.5Z"
          stroke="#E0E0E0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_249_1648">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const DoneSvg = (props) => {
  return (
    <svg
      width={props.width && '40'}
      height={props.height && '42'}
      viewBox="0 0 40 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M35 21C35 12.3047 28.2812 5.25 20 5.25C11.7188 5.25 5 12.3047 5 21C5 29.6953 11.7188 36.75 20 36.75C28.2812 36.75 35 29.6953 35 21Z"
        stroke="#368E00"
        strokeWidth="1.25"
        strokeMiterlimit="10"
      />
      <path
        d="M35 21C35 12.3047 28.2812 5.25 20 5.25C11.7188 5.25 5 12.3047 5 21C5 29.6953 11.7188 36.75 20 36.75C28.2812 36.75 35 29.6953 35 21Z"
        stroke="black"
        strokeOpacity="0.2"
        strokeWidth="1.25"
        strokeMiterlimit="10"
      />
      <path
        d="M26.4859 14.7L17.7461 25.2L14 21.2625"
        stroke="#368E00"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.4859 14.7L17.7461 25.2L14 21.2625"
        stroke="black"
        strokeOpacity="0.2"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const AdditionallySvg = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 11.6667V13.3333H7V11.6667H2ZM2 1.66667V3.33333H10.3333V1.66667H2ZM10.3333 15V13.3333H17V11.6667H10.3333V10H8.66667V15H10.3333ZM5.33333 5V6.66667H2V8.33333H5.33333V10H7V5H5.33333ZM17 8.33333V6.66667H8.66667V8.33333H17ZM12 5H13.6667V3.33333H17V1.66667H13.6667V0H12V5Z"
        fill="white"
      />
    </svg>
  );
};

export const ContactsSvg = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.8333 15.8333H4.16667V4.16667H15.8333M15.8333 2.5H4.16667C3.72464 2.5 3.30072 2.67559 2.98816 2.98816C2.67559 3.30072 2.5 3.72464 2.5 4.16667V15.8333C2.5 16.2754 2.67559 16.6993 2.98816 17.0118C3.30072 17.3244 3.72464 17.5 4.16667 17.5H15.8333C16.2754 17.5 16.6993 17.3244 17.0118 17.0118C17.3244 16.6993 17.5 16.2754 17.5 15.8333V4.16667C17.5 3.24167 16.75 2.5 15.8333 2.5ZM13.75 13.5417C13.75 12.2917 11.25 11.6667 10 11.6667C8.75 11.6667 6.25 12.2917 6.25 13.5417V14.1667H13.75M10 10.2083C10.4973 10.2083 10.9742 10.0108 11.3258 9.65916C11.6775 9.30753 11.875 8.83061 11.875 8.33333C11.875 7.83605 11.6775 7.35914 11.3258 7.00751C10.9742 6.65588 10.4973 6.45833 10 6.45833C9.50272 6.45833 9.02581 6.65588 8.67417 7.00751C8.32254 7.35914 8.125 7.83605 8.125 8.33333C8.125 8.83061 8.32254 9.30753 8.67417 9.65916C9.02581 10.0108 9.50272 10.2083 10 10.2083Z"
        fill="white"
      />
    </svg>
  );
};

export const LockSvg = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.9999 16.6666V8.33331H4.99992V16.6666H14.9999ZM14.9999 6.66665C15.4419 6.66665 15.8659 6.84224 16.1784 7.1548C16.491 7.46736 16.6666 7.89129 16.6666 8.33331V16.6666C16.6666 17.1087 16.491 17.5326 16.1784 17.8452C15.8659 18.1577 15.4419 18.3333 14.9999 18.3333H4.99992C4.07492 18.3333 3.33325 17.5833 3.33325 16.6666V8.33331C3.33325 7.89129 3.50885 7.46736 3.82141 7.1548C4.13397 6.84224 4.55789 6.66665 4.99992 6.66665H12.4999V4.99998C12.4999 4.33694 12.2365 3.70105 11.7677 3.23221C11.2988 2.76337 10.663 2.49998 9.99992 2.49998C9.33688 2.49998 8.70099 2.76337 8.23215 3.23221C7.76331 3.70105 7.49992 4.33694 7.49992 4.99998H5.83325C5.83325 3.89491 6.27224 2.8351 7.05364 2.0537C7.83504 1.2723 8.89485 0.833313 9.99992 0.833313C10.5471 0.833313 11.0889 0.941087 11.5944 1.15048C12.1 1.35988 12.5593 1.66679 12.9462 2.0537C13.3331 2.44061 13.64 2.89994 13.8494 3.40547C14.0588 3.91099 14.1666 4.45281 14.1666 4.99998V6.66665H14.9999ZM9.99992 14.1666C9.55789 14.1666 9.13397 13.9911 8.82141 13.6785C8.50885 13.3659 8.33325 12.942 8.33325 12.5C8.33325 12.058 8.50885 11.634 8.82141 11.3215C9.13397 11.0089 9.55789 10.8333 9.99992 10.8333C10.4419 10.8333 10.8659 11.0089 11.1784 11.3215C11.491 11.634 11.6666 12.058 11.6666 12.5C11.6666 12.942 11.491 13.3659 11.1784 13.6785C10.8659 13.9911 10.4419 14.1666 9.99992 14.1666Z"
        fill="white"
      />
    </svg>
  );
};

export const BellSvg = () => {
  return (
    <svg
      width="16"
      height="19"
      viewBox="0 0 16 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.33333 16.5H9.66667C9.66667 17.4167 8.91667 18.1667 8 18.1667C7.08333 18.1667 6.33333 17.4167 6.33333 16.5ZM15.5 14.8334V15.6667H0.5V14.8334L2.16667 13.1667V8.16669C2.16667 5.58335 3.83333 3.33335 6.33333 2.58335V2.33335C6.33333 1.41669 7.08333 0.666687 8 0.666687C8.91667 0.666687 9.66667 1.41669 9.66667 2.33335V2.58335C12.1667 3.33335 13.8333 5.58335 13.8333 8.16669V13.1667L15.5 14.8334ZM12.1667 8.16669C12.1667 5.83335 10.3333 4.00002 8 4.00002C5.66667 4.00002 3.83333 5.83335 3.83333 8.16669V14H12.1667V8.16669Z"
        fill="white"
      />
    </svg>
  );
};

export const PlugSvg = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.3333 5.83333V2.5H11.6667V5.83333H8.33333V2.5H6.66667V5.83333C5.83333 5.83333 5 6.66667 5 7.5V12.0833L7.91667 15V17.5H12.0833V15L15 12.0833V7.5C15 6.66667 14.1667 5.83333 13.3333 5.83333ZM13.3333 11.3917L10.9083 13.825L10.5583 14.1667H9.44167L9.1 13.825L6.66667 11.3917V7.575C6.66667 7.55 6.71667 7.5 6.74167 7.5H13.2667C13.2917 7.5 13.3333 7.55 13.3333 7.575V11.3917Z"
        fill="white"
      />
    </svg>
  );
};

export const CloseInElipseSvg = (props) => {
  return (
    <svg
      width={props.width || '24'}
      height={props.height || '24'}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke={props.stroke || 'white'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 9L9 15"
        stroke={props.stroke || 'white'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 9L15 15"
        stroke={props.stroke || 'white'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const SaveSvg = (props) => {
  return (
    <svg
      width={props.width || '24'}
      height={props.height || '24'}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 12H4V17H20V12H22V17C22 18.11 21.11 19 20 19H4C2.9 19 2 18.11 2 17V12ZM12 15L17.55 9.54L16.13 8.13L13 11.25V2H11V11.25L7.88 8.13L6.46 9.55L12 15Z"
        fill={props.fill || 'white'}
      />
    </svg>
  );
};

export const SearchSvg = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.5 3C11.2239 3 12.8772 3.68482 14.0962 4.90381C15.3152 6.12279 16 7.77609 16 9.5C16 11.11 15.41 12.59 14.44 13.73L14.71 14H15.5L20.5 19L19 20.5L14 15.5V14.71L13.73 14.44C12.59 15.41 11.11 16 9.5 16C7.77609 16 6.12279 15.3152 4.90381 14.0962C3.68482 12.8772 3 11.2239 3 9.5C3 7.77609 3.68482 6.12279 4.90381 4.90381C6.12279 3.68482 7.77609 3 9.5 3M9.5 5C7 5 5 7 5 9.5C5 12 7 14 9.5 14C12 14 14 12 14 9.5C14 7 12 5 9.5 5Z"
        fill="#E0E0E0"
      />
    </svg>
  );
};

export const ArrowGradientSvg = () => {
  return (
    <svg
      width="17"
      height="8"
      viewBox="0 0 17 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.3536 4.35355C16.5488 4.15829 16.5488 3.84171 16.3536 3.64645L13.1716 0.464466C12.9763 0.269204 12.6597 0.269204 12.4645 0.464466C12.2692 0.659728 12.2692 0.976311 12.4645 1.17157L15.2929 4L12.4645 6.82843C12.2692 7.02369 12.2692 7.34027 12.4645 7.53553C12.6597 7.7308 12.9763 7.7308 13.1716 7.53553L16.3536 4.35355ZM0 4.5H16V3.5H0V4.5Z"
        fill="url(#paint0_linear_662_244)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_662_244"
          x1="1.8724e-09"
          y1="4.5"
          x2="17.7838"
          y2="4.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8BE4D9" stopOpacity="0.6" />
          <stop offset="0.526042" stopColor="#C8B880" stopOpacity="0.6" />
          <stop offset="1" stopColor="#FF902F" stopOpacity="0.5" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const SortSvg = (props) => {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.9125 6.42499L5 4.51249L3.0875 6.42499L2.5 5.83332L5 3.33332L7.5 5.83332L6.9125 6.42499Z"
        fill={props.fill || 'white'}
      />
    </svg>
  );
};
