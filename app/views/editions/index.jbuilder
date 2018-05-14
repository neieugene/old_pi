json.array! @editions.each do |edition|
  json.partial! "list_item", edition: edition
end
