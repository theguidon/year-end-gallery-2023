cd build

git init .
git add .
git commit -m "deploy"

git branch -M gh-pages
git remote add origin https://github.com/theguidon/year-end-gallery-2023.git
git push -f -u origin gh-pages

cd ..