function konversiMenit(menit){
	var detik = menit%60
	var menit = (menit-detik)/60
	if (String(detik).length===1){
		return (menit +':'+0+detik)
	}else{
		return (menit+':'+detik)
	}

}
console.log(konversiMenit(63))
console.log(konversiMenit(124))
console.log(konversiMenit(53))
console.log(konversiMenit(88))
console.log(konversiMenit(120))