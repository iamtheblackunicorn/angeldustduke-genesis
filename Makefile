clean: ; rm -rf .jekyll-cache _site *.lock .DS_Store
build: ; bundle exec jekyll build
install: ; bundle install
serve: ; bundle exec jekyll serve
