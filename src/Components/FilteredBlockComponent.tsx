export const FilteredBlockComponent = ({ dataItem }: { dataItem: string }) => {
  return (
    <div className={`filtered-block ${dataItem}`} data-item={dataItem}>
      {dataItem.toUpperCase()}
    </div>
  );
};
