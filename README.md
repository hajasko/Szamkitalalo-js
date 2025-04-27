# Számkitaláló játék

## Link

https://hajasko.github.io/Szamkitalalo-js/

## Leírás 

A számítógép gondol egy egész számra 1 és 100 között. A felhasználó 
egy input mezőbe írja a tippjeit. A számítógép minden tippre a következők egyikét válaszolja: 

-a keresett szám kissebb
-a keresett szám nagyobb
-gratulálok, eltaláltad!

Amint eltaláltad a keresett számot, a játék véget ér. A játék végén kiírjuk a tippek számát.

Bármikor lehet új játékot indítani. Ilyenkor a korábbi tippek törlődnek és a számítőgép új számot generál.

A játék során a tippek listája időrendi sorrendben megjelenik. Felül található a legutolsó tipped, alul pedig a első tipped.

## Lépések

1. lépés: Felhasználói felület kialakítása (HTML, Bootstrap)
2. lépés: Új játék indítása: véletlen szám legenerálása
3. lépés: Új játék indítása: felhasználói interfész alapállapotba hozása (korábbi tippek törlése, input mező tartalmának törlése)
4. lépés: Tipp beküldésének eseménykezelése: kattintás után alert-el írd ki, hogy "klikk"
5. lépés: Beküldött tipp kinyerése az eseménykezelőben az input mezőből
6. lépés: Hibás tipp formátum esetén hibaüzenet. Ha nem tudsz hibás bemenetet megadni, manuálisan ellenőrizd, hogy tényleg csak 1 és 100 között adhatsz meg egész számokat.
7. lépés: Helyes tipp összehasonlítása a generált számmal
8. lépés: A tipp eredményének tipplistában tárolása és kiírása a képernyőre (kissebb, nagyobb, eltaláltad)
9. lépés: A játék befejezése, amennyiben a tipp helyes (ne lehessen újabb tippeket beküldeni)