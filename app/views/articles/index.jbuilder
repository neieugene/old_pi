@articles.each do |article|
  json.partial! 'article_list_item', article: article
end
