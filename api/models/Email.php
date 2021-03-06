<?php 
    class Email{

        public static function send(int $instituicao_id, string $status, string $subject, string $content, string $cron): void
        {
            $banco = new Banco();
            $exist = "SELECT * FROM email_notificao WHERE instituicao_id='$instituicao_id' AND acao='$status'";
            $get_email = $banco->query($exist);

            $insert = "INSERT INTO email_notificao";
            $insert .= " (instituicao_id, assunto, corpo, acao, cron)";
            $insert .= "VALUES";
            $insert .= "('$instituicao_id', '$subject', '$content', '$status', '$cron')";
           
            $update = "UPDATE email_notificao SET assunto='$subject', corpo='$content', acao='$status', cron='$cron' WHERE instituicao_id=$instituicao_id AND acao='$status'";
        

            if(empty($get_email[0])){
                $banco->exec($insert);    
            }else{
                $banco->exec($update);
            }
        }
    
        public static function list_by_instituicao(int $instituicao_id): array
        {
            $banco = new Banco();
            $sql = "SELECT * FROM email_notificao WHERE instituicao_id='$instituicao_id'";
            $get_email = $banco->query($sql);
            return $get_email;
        }


        static function exist_acao_default($acao): array
        {
           
            foreach(self::default() as $el){
                if($el['acao'] == $acao){
                    return ['assunto' => $el['assunto'],
                    'text' => $el['text']  
                    ];        
                }
            }
            return ['assunto' => 'Nao encontrado',
                    'text' => 'Nao encontrado'    
        ];
        }


        public function exest_acao(int $instituicao, string $acao): array
        {
            $banco = new Banco();
            $exist = "SELECT * FROM email_notificao WHERE acao='$acao' AND instituicao_id=$instituicao";
            $guard = $banco->query($exist);
            
            
            if(empty($guard)){

                $dados = self::exist_acao_default($acao);
                $assunto = $dados['assunto'];
                $text = $dados['text'];    
            }

            if(!empty($guard)){
                $assunto = $guard[0] ['assunto'];
                $text = $guard[0] ['corpo']; 
            }
            
            return ['assunto' => $assunto,
                    'text' => $text    
        ];

        }

        static function status_payment() : array {
            return [
                "processing", 
                "authorized", 
                "paid", 
                "refunded", 
                "waiting_payment", 
                "pending_refund", 
                "refused", 
                "chargedback"
            ];
        }
        static function cron() : array {
            return [
                "+1 minute",
                "+15 minute",
                "+1 days",
                "+2 days",
                "+3 days",
                "+4 days",
                "+5 days",
                "+6 days",
                "+7 days",
                "+8 days",
                "+9 days",
                "+10 days",
            ];
        }
        static function tags() : array {
            return [
                "@@nome_doador@@",
                "@@nome_doador_completo@@",
                "@@nome_instituicao@@",
                "@@link_boleto@@",
                "@@botao_com_boleto@@",
                "@@link_recuperar_doacao@@",
                "@@botao_recuperar_doacao@@",
                "@@codigo_barras_boleto@@",
                "@@link_recuperacao_senha@@",
                "@@botao_recuperacao_senha@@",
                "@@telefone_doador@@",
                "@@telefone_instituicao@@",
            ];
        }
        static function default() {
            return [
                [
                    "cron" => "+1 minute",
                    "acao" => "processing",
                    "assunto" => "Doar Digital - Doa????o Processada (Aguardando)",
                    "text" => "Sua Doa????o est?? sendo processada. Estamos felizes por sua colabora????o, e no aguardo de sua conclus??o. Agradecemos imensamente por sua doa????o.",
                ],
                [
                    "cron" => "+1 minute",
                    "acao" => "paid",
                    "assunto" => "Doar Digital - Doa????o Conclu??da",
                    "text" => "Sua Doa????o foi conclu??da com sucesso.  Somos imensamente gratos por sua doa????o. Ela ajuda a manter todo projeto vivo e com pleno funcionamento.",
                ],
                [
                    "cron" => "+1 minute",
                    "acao" => "refunded",
                    "assunto" => "Doar Digital - Doa????o Falhada",
                    "text" => "Sua Doa????o n??o foi conclu??da.  Houve alguma falha no processamento de sua doa????o. Pedimos a gentileza de verificar se houve algum dado digitado trocado ou faltando algum n??mero. Ou se preferir pode nos chamar no suporte para que nossa equipe possa te auxiliar em sua doa????o.",
                ],
                [
                    "cron" => "+15 minute",
                    "acao" => "waiting_payment",
                    "assunto" => "Doar Digital - Obrigado por ser provid??ncia para @@institution_name@@",
                    "text" => "Ol?? @@nome@@, Obrigada por visitar nossa p??gina! Somos uma institui????o que vive exclusivamente das doa????es recebidas, para manter a obra funcionando. Os recursos s??o escassos e a provid??ncia divina tem tocado muitos cora????es desejosos de fazer essa experi??ncia da doa????o, para que tudo se mantenha ativo e que mais vidas sejam salvas para Jesus! Por vezes queremos fazer muito mais, entretanto temos que aguardar que as promessas de Deus se cumpram, no tempo dele e n??o no nosso. Mas Ele nos surpreende e cuida de n??s com muito carinho, quando voc?? chega at?? n??s e se mostra interessado em ajudar. Apenas por voc?? ter nos visitado aqui, j?? somos gratos. Esperamos que a provid??ncia divina tamb??m se fa??a presente na sua vida e que voc?? consiga finalizar a inten????o de fazer parte dos doadores. J?? rezamos muito nas necessidades de cada um, pois acreditamos que juntos podemos fazer maravilhas pelos que precisam. N??s n??o existir??amos sem voc??s e todo nosso trabalho ficaria sem sentido se n??o tiv??ssemos a ajuda de irm??os t??o comprometidos! Estamos falando de um ex??rcito de doadores, fortalecidos pelo poder da ora????o, sustentando filhos necessitados de amor e aten????o, gerando mais e mais almas restauradas para o reino de Deus. Obrigada por estar conosco! Um abra??o fraterno",
                ],
                [
                    "cron" => "+2 days",
                    "acao" => "waiting_payment",
                    "assunto" => "Doar Digital - Voc?? j?? faz parte desta miss??o!",
                    "text" => "Ol?? Amigo da  institui????o. Hoje temos um recadinho de nosso fundador para voc??. Em tempos t??o dif??ceis, sua doa????o ?? para n??s sinal de Deus como provid??ncia divina. Um amor que motiva todos n??s a continuar firme. Pois atrav??s de sua doa????o, conseguimos restaurar vidas no pa??s todo. Quando voc?? faz sua doa????o, voc?? est?? fazendo parte da restaura????o de vidas, sendo na evangeliza????o ou nos cuidados com o pr??ximo que chega at?? n??s. Contamos muito com voc??, Deus te aben??oe poderosamente.",
                ],
                [
                    "cron" => "+4 days",
                    "acao" => "waiting_payment",
                    "assunto" => "Doar Digital - Voc?? ?? Pedra Viva para a miss??o",
                    "text" => "Ol?? {{first_name}}. Seja parte viva desta miss??o t??o linda que pertencemos. Hoje voc?? pode ser parte integrante e muito fundamental para n??s. Ningu??m pode mudar sonhos, mas podemos ajudar a concretiz??-los com forte e vitalidade. Venha e seja mais uma pessoa feliz junto a n??s. Contamos muito com voc??, Deus te aben??oe poderosamente. Clique e finalize sua doa????o.",
                ],
                [
                    "cron" => "+2 days",
                    "acao" => "waiting_payment",
                    "assunto" => "Doar Digital - Voc?? tem a chave?",
                    "text" => "Voc?? tem uma chave poderosa que pode nos abrir muito caminhos entre as dificuldades da vida. Sua doa????o transforma vidas, leva Amor, Caridade, Esperan??a. Sentimentos que s?? voc?? pode ajudar a construir nessa fase dif??cil em que vivemos. Obrigado por sua Doa????o, ela move montanhas.",
                ],
                [
                    "cron" => "+4 days",
                    "acao" => "waiting_payment",
                    "assunto" => "Doar Digital - Estamos te chamando, voc?? viu?",
                    "text" => "Seu cora????o bateu mais forte para estar unido conosco nesta miss??o. Ou??a sua voz e seja for??a viva junto a nossa miss??o. Voc?? j?? faz parte de uma grande ex??rcito de pessoas do bem que ajudam a transformar o mundo com pequenos gestos de Amor e Gratid??o. Venha, continue caminhando conosco.",
                ],
                [
                    "cron" => "+6 days",
                    "acao" => "waiting_payment",
                    "assunto" => "Doar Digital - Sua promessa j?? chegou?",
                    "text" => "Todos n??s temos uma promessa B??blica que logo chegar??, cedo ou tarde. Por??m os que souberem o momento certo de olhar e mergulhar nela viver??o algo extraordin??rio do C??u. Voc?? j?? percebeu? Quando ajudamos mais, notamos em nossa vida o quanto somos mais gratos, mais pacientes, mais amados. A gratid??o prov??m de exerc??cios do nosso ser junto aos irm??os, miss??es e trabalhos unidos ao cora????o de Deus. Seja um provedor em nossa miss??o e viva tamb??m uma grande transforma????o pessoal de gratid??o.",
                ],
                [
                    "cron" => "+8 days",
                    "acao" => "waiting_payment",
                    "assunto" => "Doar Digital - Estamos esperando sua presen??a, voc?? vem?",
                    "text" => "Ol?? @@to_name@@ Estamos ansiosos e contando os minutos para que voc?? esteja conosco nessa miss??o maravilhosa que vivemos. Amar ?? nosso lema e servir nossa miss??o. Seja voc?? tamb??m parte integrante dessa grande miss??o, contribua com nossa obra e veja os frutos que ela gera. Contamos com voc??! Seu boleto",
                ],
                [
                    "cron" => "+9 days",
                    "acao" => "waiting_payment",
                    "assunto" => "Doar Digital - Ben????os para voc??",
                    "text" => "Ol?? @@to_name@@. Ainda n??o conseguimos identificar o seu pagamento. Podemos ajudar de alguma forma?  Estamos orando por voc?? para que muitas ben????os sejam derramadas sobre voc??. Pois voc?? merece muitas e muitas ben????os. Seu boleto",
                ],
                [
                    "cron" => "+10 days",
                    "acao" => "waiting_payment",
                    "assunto" => "Doar Digital - Precisamos de voc??",
                    "text" => "Oi @@to_name@@. Nossa @@institution_name@@ precisa muito de sua ajuda e por isso queremos te convidar a estar presente conosco em cada momento para viver tamb??m as gra??as que recebemos. Mesmo n??o estando fisicamente, voc?? j?? est?? espiritualmente. Por isso toda ajuda para mantermos a obra ?? bem vinda. Contamos com voc??, Deus te aben??oe poderosamente. Gra??a e paz! Seu boleto",
                ]
            ];
        }
    }
?>