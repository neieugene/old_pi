json.merge! article.attributes
json.small_avatar article.avatar.url(:small)
json.original_avatar article.avatar.url(:original)
json.document article.document
json.authors article.authors.each do |author|
  json.partial! "authors/show", author: author
end
