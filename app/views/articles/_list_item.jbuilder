json.id article.id
json.name article.name
json.description article.description
json.annotation article.annotation
json.small_avatar article.avatar.url(:small)
json.original_avatar article.avatar.url(:original)
json.is_disabled !article.is_available_for(current_user)
json.authors article.authors.each do |author|
  json.partial! "authors/show", author: author
end
