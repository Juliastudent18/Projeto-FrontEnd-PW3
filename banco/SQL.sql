create database db_projetoStardewValley;

use db_projetoStardewValley;

create table tbl_personagens(
	id			int primary key auto_increment,
    nome		varchar(40),
    descricao	varchar(255)
);

create table tbl_pessoas(
	id			int primary key auto_increment,
    nome		varchar(40) not null,
    descricao	varchar(255),
    moradia		varchar(9),
    data_nasc	date,
    fvrt_perso	int,
    foreign key (fvrt_perso) references tbl_personagens(id)
);
