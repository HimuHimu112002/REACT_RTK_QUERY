import { useGetFoodsQuery, useGetItemsQuery } from "../features/api/apiSlice";

const ItemsList = () => {
  const { data: items, error, isLoading } = useGetItemsQuery();
  const { data: foods, error: foodsError, isLoading: FoodsLoading } = useGetFoodsQuery();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading items</div>;

  if (FoodsLoading) return <div>Loading...</div>;
  if (foodsError) return <div>Error Food loading items</div>;

  return (
    <ul>
      {items.data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
      <h1>Test format</h1>
      {foods.data.map((item) => (
        <li key={item.id}>{item.category}</li>
      ))}
    </ul>
  );
};
export default ItemsList;
