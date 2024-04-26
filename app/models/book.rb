class Book < ApplicationRecord
  acts_as_taggable
  
  belongs_to :user
  has_many :book_comments, dependent: :destroy
  has_many :favorites, dependent: :destroy

  validates :title,presence:true
  validates :body,presence:true,length:{maximum:200}

  def self.ransackable_attributes(auth_object = nil)
    ["title", "user_id"]
  end
  
  def self.ransackable_associations(auth_object = nil)
    ["user"]
  end
  
  
  def favorited_by?(user)
    favorites.any?{|f| f.user_id == user.id}
  end
end
