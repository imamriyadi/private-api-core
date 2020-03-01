# private-api-core

=========================
langkah pertama lakukan install exspress generator dan sequelize-cli menggunakan npm
#npm i -g express-generator sequelize-cli

install sequelize dan mysql 
#npm install sequelize mysql2 --save

Setelah itu, kita akan membuat direktori yang diperlukan untuk koneksi ke DB dengan perintah
#sequelize init
// output : Perintah di atas menghasilkan 4 folder, yaitu config, models, migrations, dan seeders.

memebuat model dengan sequelize
#sequelize model:create --name users --attributes name:string,email:string,phone_number:string,gender:boolean

Menjalankan Migrate Model
#sequelize db:migrate
==========================

=========================
cara untuk menghapus model
#sequelize db:migrate:undo

seteleah itu lakukan migrate ulang
#sequelize db:migrate 
=========================

=================================================
Untuk mengisi data ke setiap database, kita bisa memasukkannya melalui seed. Untuk mengisi data ke setiap database, kita bisa memasukkannya melalui seed. Nah, apa lagi tuh seed? sepeti pada susunan folder di atas, seed itu bawaan dari sequelize, dimana seed berfungsi untuk memberikan data awal, atau bisa juga data yang sifatnya yang tidak berubah-ubah, atau konstanta. Contohnya seperti address, provinsi, dll. 

#sequelize seed:generate --name add-data-users-seed

Kata-kata setelah — name itu adalah penamaan saja. Catatan harus deskriptif penamaanya, agar tidak membingungkan.


untuk menjalankan
#sequelize db:seed:all

======================================================



======================================================

cara meghapus semua table migrate
#sequelize db:migrate:undo:all


cara menghapus seed semua table 
#sequelize db:seed:undo:all

cara menghapus per isi data tabel

#sequelize db:seed:undo --seed name-of-seed-as-in-data
======================================


catatan

pada sequelize penamaan table user harus menggunakan s untuk mengatasinya silahkan tambahakan option
{
freezeTableName: true,}
refresninya : https://stackoverflow.com/questions/28546381/sequelize-gives-the-wrong-table-name
