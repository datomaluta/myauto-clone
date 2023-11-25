const BottomHeader = () => {
  return (
    <div className="flex mt-16 text-sm h-[4.5rem] py-4 bg-white items-center lg:hidden ">
      <div className="max-w-[91.875rem] mx-auto flex justify-between w-full px-3">
        <ul className="flex gap-3">
          <li>გაფორმება</li>
          <li>VIN-ის შემოწმება</li>
          <li>დილერები</li>
          <li>ავტოსალონები</li>
          <li>აუქციონი</li>
          <li>ავტონაწილები</li>
          <li>კატალოგი</li>
          <li>ბლოგი</li>
        </ul>
        <ul className="flex gap-3">
          <li>დახმარება</li>
          <li>კონტაქტი</li>
        </ul>
      </div>
    </div>
  );
};

export default BottomHeader;
