import GroupedCheckbox from "../../common/GroupedCheckBox";

const FilterMenu = ({ setData, data, selected }) => {
  return (
    <div className="flex flex-col px-[30px] py-[40px] z-[9999] relative">
      <div className="grid gap-y-[22px]">
        <GroupedCheckbox
          options={data}
          selected={selected}
          onChange={(selectedOptions) => setData(selectedOptions)}
        />
      </div>
    </div>
  );
};

export default FilterMenu;
