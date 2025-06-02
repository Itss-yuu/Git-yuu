import math
from matematika.persegi import luas_persegi, keliling_persegi

from matematika.lingkaran import luas_lingkaran, keliling_lingkaran
from bangun_ruang.kubus import volume_kubus, luas_permukaan_kubus
from bangun_ruang.bola import volume_bola, luas_permukaan_bola

# Data tetap
sisi_persegi = 5
r_lingkaran = 7
sisi_kubus = 5
r_bola = 7

# Menghitung
luas_persegi_result = luas_persegi(sisi_persegi)
keliling_persegi_result = keliling_persegi(sisi_persegi)

luas_lingkaran_result = luas_lingkaran(r_lingkaran)
keliling_lingkaran_result = keliling_lingkaran(r_lingkaran)

volume_kubus_result = volume_kubus(sisi_kubus)
luas_permukaan_kubus_result = luas_permukaan_kubus(sisi_kubus)

volume_bola_result = volume_bola(r_bola)
luas_permukaan_bola_result = luas_permukaan_bola(r_bola)

# Menampilkan hasil
print(f"Luas Persegi: {luas_persegi_result:.2f}")
print(f"Keliling Persegi: {keliling_persegi_result:.2f}")
print(f"Luas Lingkaran: {luas_lingkaran_result:.2f}")
print(f"Keliling Lingkaran: {keliling_lingkaran_result:.2f}")
print(f"Volume Kubus: {volume_kubus_result:.2f}")
print(f"Luas Permukaan Kubus: {luas_permukaan_kubus_result:.2f}")
print(f"Volume Bola: {volume_bola_result:.2f}")
print(f"Luas Permukaan Bola: {luas_permukaan_bola_result:.2f}")

