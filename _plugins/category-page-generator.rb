module Jekyll

  class  CategoryPage < Page
    def initialize(site, base, dir, category, post_type, description)
      @site = site
      @base = base
      @dir = dir
      @name = 'index.html'

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'posts-by-category.html')
      self.data['title'] = category
      self.data['menu'] = 'hidden'
      self.data['type'] = post_type
      self.data['category'] = category
      self.data['description'] = description
    end
  end

  class  CategoryPageGenerator < Generator
    safe true

    def generate(site)
      dir = site.config['dir']['categories']
      site.posts.each do | post |
        post_type = post.data["type"]
        post.categories.each do | category |
          escape_tag = category.gsub(/ /, '-')
          if site.config['categories']
            description = site.config['categories'][category]
          end
          site.pages << CategoryPage.new(site, site.source, File.join(dir, escape_tag), category, post_type, description)
        end
      end
    end
  end

end
