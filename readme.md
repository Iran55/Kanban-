Pequeno gerenciador de tarefas no estilo Kanban 
Desenvolvido com as tecnologias (HTML, CSS, JAVASCRIPT, PHP)
Banco de dados : MySQL

para fazer a conexão com o banco de dados:

	$servidor = "localhost";
	$usuario = "root";
	$senha = "";
	$dbname = "acesso";
	
	//Criar a conexao
	$conn = mysqli_connect($servidor, $usuario, $senha, $dbname);
	
	if(!$conn){
		die("Falha na conexao: " . mysqli_connect_error());
	}else{
		//echo "Conexao realizada com sucesso";
	}	
	
