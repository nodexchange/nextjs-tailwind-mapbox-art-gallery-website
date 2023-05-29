const ButtonD = ({ action, title, disabled }) => {
  return (
    <div
      className="pt-2 top-0 flex cursor-pointer group h-btn justify-end"
      onClick={(e) => {
        if (!disabled) action(e);
      }}>
      <div className="flex items-center justify-center px-6 transition group-hover:bg-shineDark bg-shine">
        <svg width="10" height="24" xmlns="http://www.w3.org/2000/svg">
          <path stroke="#FFF" fill="none" d="M9 24 1 12 9 0" />
        </svg>
      </div>
      <div className="flex items-center justify-center px-6 font-extrabold text-white uppercase transition bg-shine group-hover:bg-shineDark font-bigShoulder text-button">
        {title}
      </div>
    </div>
  );
};

export default ButtonD;
