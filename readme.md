# Tugas
1. Angular adalah open-source JavaScript framework yang ditulis dalam TypeScript. Angular dikelola oleh Google, dan tujuan utamanya adalah untuk mengembangkan aplikasi satu halaman. Sebagai framework, Angular memiliki keunggulan yang jelas sekaligus menyediakan struktur standar bagi developer untuk dapat bekerja dengannya. Ini memungkinkan pengguna untuk membuat aplikasi besar yang dapat mudah dikelola.

2. MVC – Framework ini dibangun di atas konsep MVC (Model-View-Controller) yang terkenal. Ini adalah pola desain yang digunakan di semua aplikasi web modern. Pola ini didasari pada pemisahan lapisan logika bisnis, lapisan data, dan lapisan presentasi menjadi beberapa bagian terpisah. Pembagian menjadi beberapa bagian ini dilakukan agar masing-masing bagian dapat dikelola dengan lebih mudah.

   AngularJS menggunakan arsitektur Model-View-Controller (MVC) yang digunakan dalam pengembangan aplikasi berbasis web.

   Jenis arsitektur ini terdiri dari:

   - Model – struktur data yang mengelola informasi dan menerima input dari controller.
   - View – representasi informasi.
   - Controller – merespons input dan berinteraksi dengan model.

   Dalam konteks Angular JS, model merujuk pada framework, sedangkan view adalah HTML dan control adalah JavaScript.

   Sederhananya seperti ini:

   - AngularJS menyatukan JavaScript dan HTML.
   - JavaScript menerima input user dan mengirimkannya ke AngularJS.
   - AngularJS menggunakan input untuk memodifikasi HTML.

   Dengan bersatunya JavaScript dan HTML berkat framework ini, kode di antara kedua bahasa tersebut akan tersinkron. Mekanisme ini nantinya memudahkan pekerjaan developer karena meminimalkan kode yang harus mereka tulis.

3. NgModule merupakan sekumpulan komponen yang didedikasikan untuk domain aplikasi, alur kerja, atau sekumpulan kemampuan yang terkait erat. Angular NgModules berbeda dari modul JavaScript, tapi juga bertugas untuk melengkapinya.

   Sebuah NgModule dapat mengasosiasikan komponennya dengan kode terkait, seperti layanan, untuk membentuk unit fungsional. Setiap aplikasi Angular memiliki modul root, yang secara konvensional dinamai AppModule. Modul ini menyediakan mekanisme Bootstrap yang meluncurkan aplikasi. Oleh karena itu, sebuah aplikasi biasanya berisi banyak modul fungsional. Seperti modul JavaScript, NgModules dapat mengimpor fungsionalitas dari NgModules lain, dan memungkinkan fungsionalitasnya sendiri untuk diekspor dan digunakan oleh NgModules lain.

4. Hubungan component dan module adalah, module berisikan component yang saling berhubungan satu sama lain dan component juga membutuhkan module untuk mingidentifikasi components lainnya

# Quiz
1. Components yang merupakan isi dari module tersebut akan dibagi menjadi beberapa jenis file yaitu:
   - HTML untuk struktur tampilannya
   - Typescript untuk isi dari HTML tersebut 
   - SCSS untuk styling
2. Component akan dikelompokkan berdasarkan modulenya seperti module subscriptions, module beranda yang akan menampilkan component-component yang merupakan isi dari module tersebut
3. Struktur file proyek tersebut dapat diperkirakan karena hasil akhir dari project angular merupakan satu file HTML saja