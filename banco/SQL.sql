create database db_projetoStardewValley;

use db_projetoStardewValley;

create table tbl_personagens(
	id			int primary key auto_increment,
    nome		varchar(40),
    descricao	varchar(255)
);

create table tbl_moradia(
	id			int primary key auto_increment,
    moradia		varchar(40),
    descricao	varchar(255)
);

create table tbl_pessoas(
	id			int primary key auto_increment,
    nome		varchar(40) not null,
    descricao	varchar(255),
    moradia		int,
    data_nasc	date,
    fvrt_perso	int,
    foreign key (fvrt_perso) references tbl_personagens(id),
    foreign key (moradia) references tbl_moradia(id)
);

insert into tbl_personagens (nome, descricao) VALUES
('Abigail', 'Uma jovem rebelde com cabelo roxo, adora aventuras e coisas misteriosas.'),
('Alex', 'Um atleta confiante que sonha em se tornar um jogador profissional.'),
('Caroline', 'Uma mulher gentil e esposa de Pierre, gosta de jardinagem.'),
('Clint', 'O ferreiro da cidade, tímido e apaixonado por Emily.'),
('Demetrius', 'Um cientista que estuda o meio ambiente e casado com Robin.'),
('Elliott', 'Um escritor romântico que mora em uma cabana na praia.'),
('Emily', 'Uma jovem espirituosa e criativa que adora moda e cristais.'),
('Evelyn', 'Uma senhora doce que ama flores e assa biscoitos para os outros.'),
('George', 'Um idoso ranzinza que costumava ser um atleta.'),
('Gus', 'O dono do Saloon Fruta Estrelar, adora cozinhar.'),
('Haley', 'Uma garota popular que inicialmente é fútil, mas pode mudar.'),
('Harvey', 'O médico da cidade, um homem reservado e responsável.'),
('Jas', 'Uma garotinha órfã que vive com Marnie, adora coisas fofas.'),
('Jodi', 'Uma mãe dedicada que cuida de seus filhos enquanto o marido está fora.'),
('Kent', 'Um soldado que retorna da guerra e sofre com traumas.'),
('Krobus', 'Uma criatura sombria e misteriosa que vive nos esgotos.'),
('Leah', 'Uma artista que adora a natureza e mora sozinha na floresta.'),
('Leo', 'Um menino selvagem que cresceu na Ilha Gengibre.'),
('Lewis', 'O prefeito da cidade há muitos anos, tem um caso com Marnie.'),
('Linus', 'Um homem solitário que vive em uma tenda e ama a natureza.'),
('Marnie', 'Dona do rancho, cuida dos animais e tem um romance secreto com Lewis.'),
('Maru', 'Uma inventora brilhante e filha de Demetrius e Robin.'),
('Pam', 'Uma mulher rústica que adora beber e trabalha como motorista de ônibus.'),
('Penny', 'Uma jovem gentil que ensina Jas e Vincent.'),
('Pierre', 'O dono do armazém local e um comerciante rigoroso.'),
('Robin', 'A carpinteira da cidade e esposa de Demetrius.'),
('Sam', 'Um músico animado que toca guitarra e anda de skate.'),
('Sandy', 'A misteriosa dona da loja no deserto de Calico.'),
('Sebastian', 'Um programador introvertido que gosta de motos e chuva.'),
('Shane', 'Um homem depressivo que trabalha na JojaMart, mas melhora com o tempo.'),
('Vincent', 'Um garotinho curioso que adora brincar.'),
('Willy', 'O pescador experiente que vende suprimentos de pesca.'),
('Wizard', 'Um mago poderoso que vive na torre ao sudoeste da cidade.');

insert into tbl_moradia (moradia, descricao) values
('Fazenda', 'Onde tudo começa, seu pedacinho de paz e trabalho'),
('Cidade Pelicanos', 'O coração da vila, cheia de fofocas e carinho'),
('Floresta', 'Silêncio, natureza e um ar de mistério gostoso'),
('Montanhas', 'Vista linda, clima fresco e solidão aconchegante'),
('Praia', 'Areia, mar e aquele som bom pra relaxar'),
('Deserto', 'Seco, quente, mas cheio de segredos'),
('Floresta Cinzaseiva', 'Uma floresta viva, cheia de magia e bichos'),
('Ilha Gengibre', 'Um paraíso escondido com aventuras quentes'),
('Terras Altas', 'Terras altas, brutas e cheias de energia'),
('Campos Floridos', 'Campos floridos, céu aberto e tranquilidade');