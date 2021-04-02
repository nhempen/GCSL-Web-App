sudo npm run build
[[ "$?" -ne 0 ]] && echo "Failed" && exit
sudo rm -rf /var/www/html/*
sudo cp -r ./build/* /var/www/html/
