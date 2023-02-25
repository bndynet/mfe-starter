rm -Rf dist & 
rm -Rf host/dist & 
rm -Rf app-angular/dist & 
rm -Rf app-react/build &
rm -Rf app-vue/dist &
wait

npm run build --prefix host &
npm run build --prefix app-angular &
PUBLIC_URL=/app-react/ npm run build --prefix app-react &
PUBLIC_URL=/app-vue/ npm run build --prefix app-vue &
wait

cp -R host/dist ./dist
cp -R app-html/ ./dist/app-html/
cp -R app-angular/dist/app-angular/ ./dist/app-angular/
cp -R app-react/build/ ./dist/app-react/
cp -R app-vue/dist/ ./dist/app-vue/
