const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const koneksi = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'service'
});

koneksi.connect((err) => {
    if(err) throw err;
    console.log("CONNECTION TO DB SERVICE HAS BEEN ESTABLISHED!");
});

app.listen(port, () => {
    console.log(`DINARTECHSHARE-E BACKEND SERVER STARTED, RUNNING ON PORT: ${port}`);
});

app.get('/',(req, res) => {
    res.send("DINARTECHSHARE-E BACKEND SERVER!");
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                              tabel customer

//tampilkan semua data customer
/*
app.get('/api/service/customer',(req, res) => {
    let sql = "SELECT * FROM customer";
    let query = koneksi.query(sql, (err, results) => {
        if(err) throw err;
        res.json({
            "status": 200, 
            "error": null,
            "response": results
        });
    });
});

//tampilkan data customer berdasarkan id
app.get('/api/service/customer/:id',(req, res) => {
    let sql = "SELECT * FROM customer WHERE customer_id="+req.params.id;
    let query = koneksi.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results)
        res.json({
            "status": 200,
            "error": null,
            "response": results
        });
    });
});


//tambahkan customer baru
app.post('/api/service/customer',(req, res) => {
    let data = {
        nama: req.body.customer_nama, 
        alamat: req.body.customer_alamat,
        cp: req.body.customer_cp
    };
    let sql = "INSERT INTO customer SET ?";
    let query = koneksi.query(sql, data,(err, results) => {
        if(err) throw err;
        res.json({
            "status": 200, 
            "error": null, 
            "response": results
        });
    });
});

//Update customer 
app.put('/api/service/customer/:id',(req, res) => {
    let sql = "UPDATE customer SET nama='"+req.body.customer_nama+"', alamat='"+req.body.customer_alamat+"', cp='"+req.body.customer_cp+"' WHERE customer_id="+req.params.id;
    let query = koneksi.query(sql, (err, results) => {
        if(err) throw err;
        res.json({
            "status": 200, 
            "error": null, 
            "response": results
        });
    });
});

//Delete Customer
app.delete('/api/service/customer/:id',(req, res) => {
    let sql = "DELETE FROM customer WHERE customer_id="+req.params.id+"";
    let query = koneksi.query(sql, (err, results) => {
      if(err) throw err;
        res.json({
            "status": 200, 
            "error": null, 
            "response": results
        });
    });
});


/
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////

// tabel poin


//////////////////////////////////////////////////////////////////////////////////////////////////////////

// tabel poin_history


//////////////////////////////////////////////////////////////////////////////////////////////////////////

// tabel poin


//////////////////////////////////////////////////////////////////////////////////////////////////////////

// tabel retur


//////////////////////////////////////////////////////////////////////////////////////////////////////////

// tabel service

//tampilkan semua data service
app.get('/api/service/service',(req, res) => {
    let sql = "SELECT * FROM service";
    let query = koneksi.query(sql, (err, results) => {
        if(err) throw err;
        res.json({
            "status": 200, 
            "error": null,
            "response": results
        });
    });
});

//tampilkan data service berdasarkan id
app.get('/api/service/service/:id',(req, res) => {
    let sql = "SELECT * FROM service WHERE id_tt="+req.params.id;
    let query = koneksi.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results)
        res.json({
            "status": 200,
            "error": null,
            "response": results
        });
    });
});


//tambahkan service baru
app.post('/api/service/service',(req, res) => {
    let data = {
    id_tt: req.body.service_idtt,
    id_teknisi: req.body.service_idteknisi,
    checker: req.body.service_checker,
    customer_id: req.body.service_customerid,
    nama: req.body.service_nama,
    alamat: req.body.service_alamat,
    cp: req.body.service_cp,
    ket: req.body.service_ket,
    produk: req.body.service_produk,
    merk: req.body.service_merk,
    type: req.body.service_type,
    sn: req.body.service_sn,
    keluhan : req.body.service_keluhan,
    perlengkapan: req.body.service_perlengkapan,
    penerima: req.body.service_penerima,
    tgl_masuk: req.body.service_tglmasuk,
    tgl_jadi: req.body.service_tgljadi,
    tgl_ambil: req.body.service_tglambil,
    b_sparepart: req.body.service_bsparepart,
    b_service: req.body.service_bservice,
    total: req.body.service_total,
    estimasi: req.body.service_estimasi,
    bmax: req.body.service_bmax,
    catatan: req.body.service_catatan,
    status_end: req.body.service_statusend,
    taken: req.body.service_taken,
    f_b: req.body.service_fb,
    f_a: req.body.service_fa
    };
    let sql = "INSERT INTO service SET ?";
    let query = koneksi.query(sql, data,(err, results) => {
        if(err) throw err;
        res.json({
            "status": 200, 
            "error": null, 
            "response": results
        });
    });
});

//Update service
app.put('/api/service/service/:id',(req, res) => {
    let sql = "UPDATE service SET id_teknisi='"+req.body.service_idteknisi+"', checker='"+req.body.service_checker+"', customer_id='"+req.body.service_customerid+"', nama='"+req.body.service_nama+"', alamat='"+req.body.service_alamat+"', cp='"+req.body.service_cp+"', ket='"+req.body.service_ket+"', produk='"+req.body.service_produk+"', merk='"+req.body.service_merk+"', type='"+req.body.service_type+"', sn='"+req.body.service_sn+"', keluhan='"+req.body.service_keluhan+"', perlengkapan='"+req.body.service_perlengkapan+"', penerima='"+req.body.service_penerima+"', tgl_masuk='"+req.body.service_tglmasuk+"', tgl_jadi='"+req.body.service_tgljadi+"', tgl_ambil='"+req.body.service_tglambil+"', b_sparepart='"+req.body.service_bparepart+"', b_service='"+req.body.service_bservice+"', total='"+req.body.service_total+"', estimasi='"+req.body.service_estimasi+"', bmax='"+req.body.service_bmax+"', catatan='"+req.body.service_catatan+"', status_end='"+req.body.service_statusend+"', taken='"+req.body.service_taken+"', f_b='"+req.body.service_fb+"', f_a='"+req.body.service_fa+"' WHERE id_tt="+req.params.id;
    let query = koneksi.query(sql, (err, results) => {
        if(err) throw err;
        res.json({
            "status": 200, 
            "error": null, 
            "response": results
        });
    });
});

//Delete service
app.delete('/api/service/service/:id',(req, res) => {
    let sql = "DELETE FROM service WHERE id_tt="+req.params.id+"";
    let query = koneksi.query(sql, (err, results) => {
      if(err) throw err;
        res.json({
            "status": 200, 
            "error": null, 
            "response": results
        });
    });
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// tabel status

//tampilkan semua data status
app.get('/api/service/status',(req, res) => {
    let sql = "SELECT * FROM status";
    let query = koneksi.query(sql, (err, results) => {
        if(err) throw err;
        res.json({
            "status": 200, 
            "error": null,
            "response": results
        });
    });
});

//tampilkan data status berdasarkan id
app.get('/api/service/status/:id',(req, res) => {
    let sql = "SELECT * FROM status WHERE id="+req.params.id;
    let query = koneksi.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results)
        res.json({
            "status": 200,
            "error": null,
            "response": results
        });
    });
});


//tambahkan status baru
app.post('/api/service/status',(req, res) => {
    let data = {
        id_tt: req.body.status_idtt,
        id_teknisi: req.body.status_idteknisi,
        tgl: req.body.status_tgl,
        status: req.body.status_status,
        solusi: req.body.status_solusi,
        ket: req.body.status_ket,
        type: req.body.status_type,
        validasi: req.body.status_validasi
    };
    let sql = "INSERT INTO status SET ?";
    let query = koneksi.query(sql, data,(err, results) => {
        if(err) throw err;
        res.json({
            "status": 200, 
            "error": null, 
            "response": results
        });
    });
});

//Update status
app.put('/api/service/status/:id',(req, res) => {let sql = "UPDATE status SET id_tt='"+req.body.status_idtt+"', id_teknisi='"+req.body.status_idteknisi+"', tgl='"+req.body.status_tgl+"', status='"+req.body.status_status+"', solusi='"+req.body.status_solusi+"', ket='"+req.body.status_ket+"', type='"+req.body.status_type+"', validasi='"+req.body.status_validasi+"' WHERE id="+req.params.id;
    let query = koneksi.query(sql, (err, results) => {
        if(err) throw err;
        res.json({
            "status": 200, 
            "error": null, 
            "response": results
        });
    });
});

//Delete status
app.delete('/api/service/status/:id',(req, res) => {
    let sql = "DELETE FROM status WHERE id="+req.params.id+"";
    let query = koneksi.query(sql, (err, results) => {
      if(err) throw err;
        res.json({
            "status": 200, 
            "error": null, 
            "response": results
        });
    });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// tabel take
//tampilkan semua data take
app.get('/api/service/take',(req, res) => {
    let sql = "SELECT * FROM take";
    let query = koneksi.query(sql, (err, results) => {
        if(err) throw err;
        res.json({
            "status": 200, 
            "error": null,
            "response": results
        });
    });
});

//tampilkan data take berdasarkan id
app.get('/api/service/take/:id',(req, res) => {
    let sql = "SELECT * FROM take WHERE id="+req.params.id;
    let query = koneksi.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results)
        res.json({
            "status": 200,
            "error": null,
            "response": results
        });
    });
});


//tambahkan take baru
app.post('/api/service/take',(req, res) => {
    let data = {
        id_tt : req.body.take_idtt,
        id_teknisi : req.body.take_idteknisi,
        id_take : req.body.take_idtake
    };
    let sql = "INSERT INTO take SET ?";
    let query = koneksi.query(sql, data,(err, results) => {
        if(err) throw err;
        res.json({
            "status": 200, 
            "error": null, 
            "response": results
        });
    });
});

//Update take
app.put('/api/service/take/:id',(req, res) => {
    let sql = "UPDATE take SET id_tt='"+req.body.take_idtt+"', id_teknisi='"+req.body.take_idteknisi+"', id_take='"+req.body.take_idtake+"' WHERE id="+req.params.id;
    let query = koneksi.query(sql, (err, results) => {
        if(err) throw err;
        res.json({
            "status": 200, 
            "error": null, 
            "response": results
        });
    });
});

//Delete take
app.delete('/api/service/take/:id',(req, res) => {
    let sql = "DELETE FROM take WHERE id="+req.params.id+"";
    let query = koneksi.query(sql, (err, results) => {
      if(err) throw err;
        res.json({
            "status": 200, 
            "error": null, 
            "response": results
        });
    });
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// tabel team


//////////////////////////////////////////////////////////////////////////////////////////////////////////

// tabel teknisi


//////////////////////////////////////////////////////////////////////////////////////////////////////////

// tabel tgl_konf


//////////////////////////////////////////////////////////////////////////////////////////////////////////

// tabel user


//////////////////////////////////////////////////////////////////////////////////////////////////////////