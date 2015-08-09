module Jekyll

  class  TagPage < Page

    def initialize(site, base, dir, tag, post_type, description)
      @site = site
      @base = base
      @dir = dir
      @name = 'index.html'

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'posts-by-tag.html')
      self.data['title'] = tag
      self.data['tag'] = tag
      self.data['menu'] = 'hidden'
      self.data['filter'] = true
      self.data['type'] = post_type
      self.data['description'] = description
    end

  end

  class  TagPageGenerator < Generator
    safe true

    def generate(site)
      dir = site.config['dir']['tags']
      site.posts.each do | post |
        post_type = post.data["type"]
        post.tags.each do | tag |
          escape_tag = tag.gsub(/ /, '-')
          description = site.config['tags'][tag]
          site.pages << TagPage.new(site, site.source, File.join(dir, escape_tag), tag, post_type, description)
        end

      end

    end

  end

end
