import adm from "../../../../../static/js/api/adm.js"
const { required, minLength, maxLength } = window.validators

export default {
	template: `
 
	<div class="d-flex flex-column flex-lg-row flex-column-fluid stepper stepper-pills stepper-column" id="kt_create_account_stepper">
		 
	<div class="d-flex flex-column flex-lg-row-auto w-xl-500px bg-lighten shadow-sm">
 
		<div class="d-flex flex-column position-xl-fixed top-0 bottom-0 w-xl-500px scroll-y"> 
			<div class="d-flex flex-row-fluid flex-column flex-center p-10 pt-lg-20"> 
				<a href="../../demo9/dist/index.html" class="mb-10 mb-lg-20">
					<img alt="Logo" src="assets/media/logos/logotipo1.png" class="h-40px" />
				</a> 
				<div class="stepper-nav"> 
					<div class="stepper-item completed" data-kt-stepper-element="nav"> 
						<div class="stepper-line w-40px"></div> 
						<div class="stepper-icon w-40px h-40px">
							<i class="stepper-check fas fa-check"></i>
							<span class="stepper-number">1</span>
						</div> 
						<div class="stepper-label">
							<h3 class="stepper-title">Tipo de Conta</h3>
						</div> 
					</div> 

					<div class="stepper-item current" data-kt-stepper-element="nav"> 
						<div class="stepper-line w-40px"></div> 
						<div class="stepper-icon w-40px h-40px">
							<i class="stepper-check fas fa-check"></i>
							<span class="stepper-number">2</span>
						</div> 
						<div class="stepper-label">
							<h3 class="stepper-title">Completar Perfil</h3>
						</div> 
					</div> 
					<div class="stepper-item" data-kt-stepper-element="nav"> 
						<div class="stepper-line w-40px"></div> 
						<div class="stepper-icon w-40px h-40px">
							<i class="stepper-check fas fa-check"></i>
							<span class="stepper-number">3</span> </div>
						<div class="stepper-label">
							<h3 class="stepper-title">Endereço</h3>
						</div> 
					</div> 
					<div class="stepper-item" data-kt-stepper-element="nav"> 
						<div class="stepper-line w-40px"></div> 
						<div class="stepper-icon w-40px h-40px">
							<i class="stepper-check fas fa-check"></i>
							<span class="stepper-number">4</span>
						</div> 
						<div class="stepper-label">
							<h3 class="stepper-title">Assinar Plano</h3>
						</div> 
					</div> 
					<div class="stepper-item" data-kt-stepper-element="nav"> 
						<div class="stepper-line w-40px"></div> 
						<div class="stepper-icon w-40px h-40px">
							<i class="stepper-check fas fa-check"></i>
							<span class="stepper-number">5</span>
						</div> 
						<div class="stepper-label">
							<h3 class="stepper-title">Finalizado</h3>
						</div> 
					</div> 
				</div> 
			</div> 
			<div class="d-flex flex-row-auto bgi-no-repeat bgi-position-x-center bgi-size-contain bgi-position-y-bottom min-h-150px min-h-lg-300px" style="background-image: url(assets/media/illustrations/sigma-1/16.png"></div>
		 
		</div> 
	</div> 
	<div class="d-flex flex-column flex-lg-row-fluid py-10"> 
		<div class="d-flex flex-center flex-column flex-column-fluid"> 
			<div class="w-lg-700px p-10 p-lg-15 mx-auto"> 

			<form @submit.prevent="finalizarAdm" autocomplete="off" class="my-auto pb-5">
			 	 <div class="current" data-kt-stepper-element="content">
						 <div class="w-100">
							 <div class="pb-10 pb-lg-15">
								 <h2 class="fw-bolder text-dark">Completar Perfil</h2>
								 <div class="text-muted fw-bold fs-6">Preencha com seus dados.</div>
							 </div>
							 <div class="fv-row mb-10">
								 <label class="d-flex align-items-center form-label">
									<span class="required">Data de Nascimento</span>
									<i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Selecione o tipo de conta conforme documento utilizado"></i></h2>
								</label>
								 <input name="business_descriptor" class="form-control form-control-lg form-control-solid" 
								 v-model.trin="$v.data_nascimento.$model" :class=" {'is-invalid':$v.data_nascimento.$error, 'is-valid':!$v.data_nascimento.$invalid }"
								 v-mask="'##/##/####'" placeholder="29/10/1980" required/>

								 <div class="erros" v-if="$v.data_nascimento.$error">
												<div class="erro_texte" v-if="!$v.data_nascimento.required">Valor
													é necessária</div>
												<div class="erro_texte" v-if="!$v.data_nascimento.minLength">
													adicione 8 digito para a data de nascimento.</div>
											</div>
											<div class="sucesso_texte" v-else>  
												</div>
						 </div>	
						 
						 <div class="mb-10 fv-row" v-if="jms == 'true'">
						 <label class="form-label mb-3">CNPJ</label>
					 <input type="text" class="form-control form-control-lg form-control-solid" name="account_name" v-model="cpf_cnpj" v-mask="'##.###.###/####-##'" placeholder="00.000.000/0000-00" required/>
					 </div>
					 
					 <div class="mb-10 fv-row" v-else>
						 <label class="form-label mb-3">CPF</label> 
					 <input type="text" class="form-control form-control-lg form-control-solid" name="account_name" v-model="cpf_cnpj" v-mask="'###.###.###-##'" placeholder="000.000.000-00" required/>
					 </div>

						 <div class="mb-0 fv-row">
								 <label class="d-flex align-items-center form-label mb-5">Selecione em qual 
								<i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Monthly billing will be based on your account plan"></i></label>
								 <div class="mb-0">
									 <label class="d-flex flex-stack mb-5 cursor-pointer">
										 <span class="d-flex align-items-center me-2">
										 <span class="symbol symbol-50px me-6">
												<span class="symbol-label">
													 <span class="svg-icon svg-icon-1 svg-icon-gray-600">
														<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
															<path d="M20 19.725V18.725C20 18.125 19.6 17.725 19 17.725H5C4.4 17.725 4 18.125 4 18.725V19.725H3C2.4 19.725 2 20.125 2 20.725V21.725H22V20.725C22 20.125 21.6 19.725 21 19.725H20Z" fill="black" />
															<path opacity="0.3" d="M22 6.725V7.725C22 8.325 21.6 8.725 21 8.725H18C18.6 8.725 19 9.125 19 9.725C19 10.325 18.6 10.725 18 10.725V15.725C18.6 15.725 19 16.125 19 16.725V17.725H15V16.725C15 16.125 15.4 15.725 16 15.725V10.725C15.4 10.725 15 10.325 15 9.725C15 9.125 15.4 8.725 16 8.725H13C13.6 8.725 14 9.125 14 9.725C14 10.325 13.6 10.725 13 10.725V15.725C13.6 15.725 14 16.125 14 16.725V17.725H10V16.725C10 16.125 10.4 15.725 11 15.725V10.725C10.4 10.725 10 10.325 10 9.725C10 9.125 10.4 8.725 11 8.725H8C8.6 8.725 9 9.125 9 9.725C9 10.325 8.6 10.725 8 10.725V15.725C8.6 15.725 9 16.125 9 16.725V17.725H5V16.725C5 16.125 5.4 15.725 6 15.725V10.725C5.4 10.725 5 10.325 5 9.725C5 9.125 5.4 8.725 6 8.725H3C2.4 8.725 2 8.325 2 7.725V6.725L11 2.225C11.6 1.925 12.4 1.925 13.1 2.225L22 6.725ZM12 3.725C11.2 3.725 10.5 4.425 10.5 5.225C10.5 6.025 11.2 6.725 12 6.725C12.8 6.725 13.5 6.025 13.5 5.225C13.5 4.425 12.8 3.725 12 3.725Z" fill="black" />
														</svg>
													</span>
											 </span>
											</span>
										 <span class="d-flex flex-column">
												<span class="fw-bolder text-gray-800 text-hover-primary fs-5">Instituição</span>
											</span>
										 </span>
										 <span class="form-check form-check-custom form-check-solid">
											<input class="form-check-input" type="radio" checked="checked" name="account_plan" value="Instituicao" v-model="tipo"/>
										</span>
									 </label>
									 <label class="d-flex flex-stack mb-5 cursor-pointer">
										 <span class="d-flex align-items-center me-2">
											 <span class="symbol symbol-50px me-6">
												<span class="symbol-label">
													 <span class="svg-icon svg-icon-1 svg-icon-gray-600">
														<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
															<path d="M13 5.91517C15.8 6.41517 18 8.81519 18 11.8152C18 12.5152 17.9 13.2152 17.6 13.9152L20.1 15.3152C20.6 15.6152 21.4 15.4152 21.6 14.8152C21.9 13.9152 22.1 12.9152 22.1 11.8152C22.1 7.01519 18.8 3.11521 14.3 2.01521C13.7 1.91521 13.1 2.31521 13.1 3.01521V5.91517H13Z" fill="black" />
															<path opacity="0.3" d="M19.1 17.0152C19.7 17.3152 19.8 18.1152 19.3 18.5152C17.5 20.5152 14.9 21.7152 12 21.7152C9.1 21.7152 6.50001 20.5152 4.70001 18.5152C4.30001 18.0152 4.39999 17.3152 4.89999 17.0152L7.39999 15.6152C8.49999 16.9152 10.2 17.8152 12 17.8152C13.8 17.8152 15.5 17.0152 16.6 15.6152L19.1 17.0152ZM6.39999 13.9151C6.19999 13.2151 6 12.5152 6 11.8152C6 8.81517 8.2 6.41515 11 5.91515V3.01519C11 2.41519 10.4 1.91519 9.79999 2.01519C5.29999 3.01519 2 7.01517 2 11.8152C2 12.8152 2.2 13.8152 2.5 14.8152C2.7 15.4152 3.4 15.7152 4 15.3152L6.39999 13.9151Z" fill="black" />
														</svg>
													</span>
												 </span>
											</span>
											 <span class="d-flex flex-column">
												<span class="fw-bolder text-gray-800 text-hover-primary fs-5">ONG</span>
											</span>
										 </span>
										 <span class="form-check form-check-custom form-check-solid">
											<input class="form-check-input" type="radio"  name="account_plan" value="ONG" v-model="tipo"/>
										</span>
									 </label>
								 <label class="d-flex flex-stack mb-0 cursor-pointer">
										 <span class="d-flex align-items-center me-2">
											 <span class="symbol symbol-50px me-6">
												<span class="symbol-label">
												 <span class="svg-icon svg-icon-1 svg-icon-gray-600">
														<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
															<path d="M13 10.9128V3.01281C13 2.41281 13.5 1.91281 14.1 2.01281C16.1 2.21281 17.9 3.11284 19.3 4.61284C20.7 6.01284 21.6 7.91285 21.9 9.81285C22 10.4129 21.5 10.9128 20.9 10.9128H13Z" fill="black" />
															<path opacity="0.3" d="M13 12.9128V20.8129C13 21.4129 13.5 21.9129 14.1 21.8129C16.1 21.6129 17.9 20.7128 19.3 19.2128C20.7 17.8128 21.6 15.9128 21.9 14.0128C22 13.4128 21.5 12.9128 20.9 12.9128H13Z" fill="black" />
															<path opacity="0.3" d="M11 19.8129C11 20.4129 10.5 20.9129 9.89999 20.8129C5.49999 20.2129 2 16.5128 2 11.9128C2 7.31283 5.39999 3.51281 9.89999 3.01281C10.5 2.91281 11 3.41281 11 4.01281V19.8129Z" fill="black" />
														</svg>
													</span>
													 </span>
											</span>
										 <span class="d-flex flex-column">
												<span class="fw-bolder text-gray-800 text-hover-primary fs-5">Missionário</span>
											</span> 
										</span> 
										<span class="form-check form-check-custom form-check-solid">
											<input class="form-check-input" type="radio" name="account_plan" value="Missionario" v-model="tipo"/>
										</span> 
									</label> 
								</div> 
							</div> 
						</div> 
					</div> 
					
					
				 
				  <div class="alert alert-danger d-flex align-items-center p-5 m-5" v-if="error!=null">
				  <!--begin::Svg Icon | path: icons/duotune/general/gen048.svg-->
				  <span class="svg-icon svg-icon-2hx svg-icon-danger me-4">
				  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
															  <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="black"></rect>
															  <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="black"></rect>
														  </svg>
				  </span>
				  <!--end::Svg Icon-->
				  <div class="d-flex flex-column">
					  <h4 class="mb-1 text-danger">{{error}}</h4>
					   </div>
			  </div>


					<div class="d-flex flex-stack pt-5">
						<div class="mr-2">
							<a type="button" class="btn btn-lg btn-light-primary me-3" href="#/" >
							 <span class="svg-icon svg-icon-4 me-1">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
									<rect opacity="0.5" x="6" y="11" width="13" height="2" rx="1" fill="black" />
									<path d="M8.56569 11.4343L12.75 7.25C13.1642 6.83579 13.1642 6.16421 12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75L5.70711 11.2929C5.31658 11.6834 5.31658 12.3166 5.70711 12.7071L11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25C13.1642 17.8358 13.1642 17.1642 12.75 16.75L8.56569 12.5657C8.25327 12.2533 8.25327 11.7467 8.56569 11.4343Z" fill="black" />
								</svg>
							</span>
						 Anterior</a>
						</div>
						<div>
						
							<button type="submit" class="btn btn-lg btn-primary">Continuar
						 <span class="svg-icon svg-icon-4 ms-1">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
									<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
									<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
								</svg>
							</span>
						 </button>
						</div>
					</div>
					 
				</form>  

			</div> 
		</div> 
		<div class="d-flex flex-center flex-wrap fs-6 p-5 pb-0">
		 
			<div class="d-flex flex-center fw-bold fs-6">
				<a href="https://doardigital.com.br" class="text-muted text-hover-primary px-2" target="_blank">Sobre</a>
				<a href="https://crm.digitalcombo.com.br/index.php/about/suporte" class="text-muted text-hover-primary px-2" target="_blank">Suporte</a>
				<a href="/cadastro/index.html#/termos" class="text-muted text-hover-primary px-2" target="_blank">Termos & Condições</a>
					</div> 
		</div> 
	</div> 
</div> 
	`,


	data: function () {
		return { 
			cpf_cnpj: null,
			data_nascimento: null,
			tipo: null,
			token: null,
			jms: "",
			error: null,

		}
	},

	validations: {
		data_nascimento: {
			required,
			minLength: minLength(10)
		},

	},
	methods: {
		async finalizarAdm() {
			this.error = null
			this.$v.$touch()
			if (this.$v.$invalid) {
				this.submitStatus = 'ERROR'
			} else {

				let res = await adm.atualizarFinaliza(
					this.cpf_cnpj,
					this.data_nascimento,
					this.tipo, 
					this.token

				)
				if (!res.next) {
					console.log(res)
					this.error = res.message
					return null
				}
				globalThis._cpf = this.cpf_cnpj
				globalThis._nascimento = this.data_nascimento
				globalThis._tipo = this.tipo
				window.location.href = `#/checkout_endereco`
			}

		},
	},


	async mounted() {
		this.jms = localStorage.getItem('cnpj')

	     this.cpf_cnpj = globalThis._cpf 
		 this.data_nascimento = globalThis._nascimento 
		 this.tipo = globalThis._tipo 
	},



}

