import adm from "../../../../../static/js/api/adm.js"
const { required, minLength, maxLength  } = window.validators

export default {
	template: `
	Domínio
	<div>

    <c-header></c-header>
    <c-aside></c-aside>

	<!--begin::Root-->
 <div class="d-flex flex-column flex-root"> 
	<div class="page d-flex flex-row flex-column-fluid"> 
		<div class="wrapper d-flex flex-column flex-row-fluid" >
		 
			<div class="content d-flex flex-column flex-column-fluid"  > 
				<div class="post d-flex flex-column-fluid" > 
					<div id="kt_content_container" class="container-xxl"> 
						<div class="card mb-5 mb-xl-10">
							<div class="card-body pt-5 pb-0">
						 
										<ul class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder">
									 
										<li class="nav-item mt-2">
										<a class="nav-link text-active-primary ms-0 me-10 py-5"
											href="#/editar-instituicoes">Informação da Instituição</a>
									</li> 
									<li class="nav-item mt-2">
										<a class="nav-link text-active-primary ms-0 me-10 py-5 "
											href="#/endereco-editar">Endereço </a>
									</li> 
									<li class="nav-item mt-2">
										<a class="nav-link text-active-primary ms-0 me-10 py-5 active"
											href="#/bancario-editar">Dados Bancario</a>
									</li>
 
										</ul> 
							</div>
						</div> 
						<div class="card mb-5 mb-xl-10"> 
							<div class="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse" data-bs-target="#kt_account_profile_details" aria-expanded="true" aria-controls="kt_account_profile_details">
							 
								<div class="card-title m-0">
									<h3 class="fw-bolder m-0">Editar Dados Bancario</h3>
								</div> 
							</div> 
							<div id="kt_account_profile_details" >
							 
								<form @submit.prevent="contaBancario" autocomplete="off" name="formulario" class="form">
								 
									<div class="card-body border-top p-9">
										 
										<div class="row mb-6"> 
											<label class="col-lg-4 col-form-label required fw-bold fs-6">Código Banco</label>
										 
											<div class="col-lg-8 fv-row">
											<div class="input-group mb-3">
												<span class="input-group-text" id="basic-addon2">
													<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shield-lock" viewBox="0 0 16 16">
														<path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
														<path d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415z"/>
													  </svg>
												</span>
												
												<input  type="number" name="codigo" v-model.trin="$v.codigo_banco.$model" required placeholder="Código Banco"
												 class="form-control form-control-lg form-control-solid" placeholder="codigo_banco"
												:class=" {'is-invalid':$v.codigo_banco.$error, 'is-valid':!$v.codigo_banco.$invalid }" />
											
												</div>	
												<div class="erros" v-if="$v.codigo_banco.$error">
												<div class="erro_texte" v-if="!$v.codigo_banco.required">Valor
													é necessária</div>
												<div class="erro_texte" v-if="!$v.codigo_banco.maxLength">
													adicione no maximo 3 numero para codigo banco.</div>
											</div>
											<div class="sucesso_texte" v-else>  
												</div>
											</div> 
										</div>
										<div class="row mb-6">
										 <label class="col-lg-4 col-form-label required fw-bold fs-6">Agencia</label>
 
											<div class="col-lg-8 fv-row">
												<input  type="number" name="agencia" v-model.trin="$v.agencia.$model" required
												 class="form-control form-control-lg form-control-solid" placeholder="Agencia"
												:class=" {'is-invalid':$v.agencia.$error, 'is-valid':!$v.agencia.$invalid }" />
												
												<div class="erros" v-if="$v.agencia.$error">
												<div class="erro_texte" v-if="!$v.agencia.required">Valor
													é necessária</div>
												<div class="erro_texte" v-if="!$v.agencia.maxLength">
													adicione no maximo 4 numero para agencia.</div>
											</div>
											<div class="sucesso_texte" v-else>  
												</div>

											</div> 
										</div> 
									
										<div class="row mb-6"> 
											<label class="col-lg-4 col-form-label fw-bold fs-6">
												<span class="required">Conta</span>
											
											</label> 
											<div class="col-lg-8 fv-row"> 
												<input  type="number" name="conta" v-model.trin="$v.conta.$model" required
												 class="form-control form-control-lg form-control-solid" placeholder="conta"
												:class=" {'is-invalid':$v.conta.$error, 'is-valid':!$v.conta.$invalid }" />
												
												<div class="erros" v-if="$v.conta.$error">
												<div class="erro_texte" v-if="!$v.conta.required">Valor
													é necessária</div>
												<div class="erro_texte" v-if="!$v.conta.maxLength">
													adicione no maximo 13 numero para conta.</div>
											</div>
											<div class="sucesso_texte" v-else>  
												</div> 

												</div> 
										</div>
										<div class="row mb-6"> 
											<label class="col-lg-4 col-form-label fw-bold fs-6">
												<span class="required">Conta Dígito</span>
											
											</label> 
											<div class="col-lg-8 fv-row">
												 
												<input  type="number" name="cDigito" v-model.trin="$v.conta_digito.$model" required
												 class="form-control form-control-lg form-control-solid" placeholder="conta_digito"
												:class=" {'is-invalid':$v.conta_digito.$error, 'is-valid':!$v.conta_digito.$invalid }" />
												
												<div class="erros" v-if="$v.conta_digito.$error">
												<div class="erro_texte" v-if="!$v.conta_digito.required">Valor
													é necessária</div>
												<div class="erro_texte" v-if="!$v.conta_digito.maxLength">
													adicione no maximo 2 numero .</div>
											</div>
											<div class="sucesso_texte" v-else>  
												</div>
											
												</div> 
										</div>
										
										<div class="row mb-6"> 
											<label class="col-lg-4 col-form-label fw-bold fs-6">
												<span class="required">Tipo</span>
											
											</label> 
											<div class="col-lg-8 fv-row">
												<select v-model="tipo_conta" class="form-select form-control form-control-lg form-control-solid" aria-label="Default select example">
													<option value="">seleciono o tipo de conta </option>
													<option value="conta_corrente">Conta Corrente</option>
													<option value="conta_poupanca">Conta Poupança</option>
													<option value="conta_corrente_conjunta">Conta Corrente Conjunta</option>
													<option value="conta_poupanca_conjunta">Conta Poupança Conjunta</option>
												</select>
											
											</div> 
										</div>
 

										<div class="row mb-6"> 
											<label class="col-lg-4 col-form-label fw-bold fs-6">
												<span class="required">Nome</span>
											
											</label> 
											<div class="col-lg-8 fv-row"> 
												<input  type="text" name="nome" v-model.trin="$v.nome_completo.$model" required
												class="form-control form-control-lg form-control-solid" placeholder="nome_completo"
											   :class=" {'is-invalid':$v.nome_completo.$error, 'is-valid':!$v.nome_completo.$invalid }" />
											   
											   <div class="erros" v-if="$v.nome_completo.$error">
											   <div class="erro_texte" v-if="!$v.nome_completo.required">Valor
												   é necessária</div>
											   <div class="erro_texte" v-if="!$v.nome_completo.maxLength">
												   O nome deve ter no maximo 30 caracteres .</div>
										   </div>
										   <div class="sucesso_texte" v-else>  
											   </div>
										 
												</div> 
										</div>

										
										<div class="row mb-6"> 
											<label class="col-lg-4 col-form-label fw-bold fs-6">
												<span class="required">Documento numero</span> 
											</label> 
											<div class="col-lg-8 fv-row">
												<input v-model="documento_numero" type="text" name="documento_numero" class="form-control form-control-lg form-control-solid" required/>
											</div> 
										</div>


										
										<div class="row mb-6"> 
											<label class="col-lg-4 col-form-label fw-bold fs-6">
												<span class="required">Recebedor Nome</span> 
											</label> 
											<div class="col-lg-8 fv-row">
												<input v-model="recebedor_nome" type="text" name="recebedor" class="form-control form-control-lg form-control-solid" required/>
											</div> 
										</div>

										<div class="row mb-6"> 
										<label class="col-lg-4 col-form-label fw-bold fs-6">
											<span class="required">Recebedor Email</span> 
										</label> 
										<div class="col-lg-8 fv-row">
											<input v-model="email_recebedor" type="text" name="recebedoremail" class="form-control form-control-lg form-control-solid" required/>
										</div> 
									</div>
										
										
										<div class="row mb-6"> 
											<label class="col-lg-4 col-form-label fw-bold fs-6">
												<span class="required">CNPJ</span> 
											</label> 
											<div class="col-lg-8 fv-row">
												<input v-model="cnpj" type="text" name="ndocumento" class="form-control form-control-lg form-control-solid" required/>
											</div> 
										</div>
										<div class="row mb-6"> 
											<label class="col-lg-4 col-form-label fw-bold fs-6">
												<span class="required">Telefone</span> 
											</label> 
											<div class="col-lg-8 fv-row">
												<input v-model="telefone_recebedor" type="text" name="telefone" class="form-control form-control-lg form-control-solid" required/>
											</div> 
										</div>
										
										<div class="row mb-6"> 
											<label class="col-lg-4 col-form-label fw-bold fs-6">
												<span class="required">URL Site</span> 
											</label> 
											<div class="col-lg-8 fv-row">
												<input v-model="site_url" type="text" name="url" class="form-control form-control-lg form-control-solid" required/>
											</div> 
										</div>
									</div>
									
									<div class="card-footer d-flex justify-content-end py-6 px-9">
										<button  type="submit" class="btn btn-primary" id="kt_account_profile_details_submit">SALVAR</button>
									</div> 
								</form> 
							</div> 
						</div> 
					</div>
				 
				</div> 
			</div> 

		</div>
	</div>
</div>	 

		<c-footer/>
	</div>
    `,


	data: function () {
		return { 
			token: null,
			instituicao_id: null,
			codigo_banco: null,
			agencia: null, 
			conta: null,
			conta_digito: null,
			tipo_conta: "",
			nome_completo: null,
			documento_numero: null,
			recebedor_nome: null,
			email_recebedor: null,
			cnpj: null,
			site_url: null,
			telefone_recebedor: null,
			  
			msg: "",
			items: [],
			data: null,

		}
	},

	validations: {
		codigo_banco: {
			required,
			maxLength: maxLength(3)
		},
		agencia: {
			required,
			maxLength: maxLength(4)
		},
		conta: {
			required,
			maxLength: maxLength(13)
		},
		conta_digito: {
			required,
			maxLength: maxLength(2)
		},
		nome_completo: {
			required,
			maxLength: maxLength(30)
		}
	},

	methods: {
		async contaBancario() {
			this.error = null
			this.$v.$touch()
			if (this.$v.$invalid) {
				this.submitStatus = 'ERROR'
			} else {
				let res = await adm.cotaInstituicao(
					this.token,
					this.instituicao_id,
					this.codigo_banco,
					this.agencia,
					this.agencia_digito,
					this.conta,
					this.conta_digito,
					this.tipo_conta,
					this.nome_completo,
					this.documento_numero,
					this.recebedor_nome,
					this.email_recebedor, 
					this.cnpj,
					this.site_url,
					this.telefone_recebedor,
				)
				if (!res.next) {
					// this.error = res.message
					this.msg = res.message
					return null
				} 
				this.submitStatus = 'PENDING'
				setTimeout(() => {
				  this.submitStatus = 'OK'
				  this.msg = res.message 
				}, 500)
			}
		},
 

	},

	async mounted() {
		this.instituicao_id = localStorage.getItem("instituicao_id"); 
	 },
 
 

}

