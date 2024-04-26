# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
5.times do |n|
  user = User.create!(
    name: "User #{n + 1}",
    email: "#{n + 1}@mail.com",
    introduction: 'word ' * (n + 1),
    password: 'aaaaaa'
  )
  if n < 2
    user.profile_image.attach(io: File.open(Rails.root.join("app/assets/images/icon#{n+1}.jpg")), filename: "icon#{n+1}")
  end
  
  Book.create!(
    title: "test title #{n + 1}",
    body: "test body #{n + 1}",
    user_id: n % 2 + 1,
    tag_list: ['ruby', 'rails']
  )
end

User.create!(
  name: "mentor",
  email: "a@a",
  password: "aaaaaa"
)

[["abcの本", 1], ["defの本", 1], ["呪文の本", 2]].each do |v|
  Book.create!(title: v[0], body: "search test", user_id: v[1], tag_list: ["search"])
end

Favorite.create!(
    user_id: 1,
    book_id: 1,
)

