interface RenderListProps<T, K extends string> {
  data: T[];
  resourceName: K;
  dataToRender: React.ComponentType<{ [P in K]: T }>;
}

const RenderList = <T, K extends string>({ data, resourceName, dataToRender: ItemComponent }: RenderListProps<T, K>) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((item, i) => {
        const props = { [resourceName]: item };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return <ItemComponent key={i} {...(props as any)} />;
      })}
    </div>
  );
};

export default RenderList;
