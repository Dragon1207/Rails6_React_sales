json.product do
  json.id @product.id
  json.name @product.name
  json.price number_to_currency(@product.price)
  json.description @product.description
  json.quantity @product.quantity
  json.user_id @product.user_id
end
