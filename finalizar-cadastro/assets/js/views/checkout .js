

export default {
    template:`
	
	<div class="d-flex flex-column flex-lg-row flex-column-fluid stepper stepper-pills stepper-column" id="kt_create_account_stepper">
		 
	<div class="d-flex flex-column flex-lg-row-auto w-xl-500px bg-lighten shadow-sm">
 
		<div class="d-flex flex-column position-xl-fixed top-0 bottom-0 w-xl-500px scroll-y"> 
			<div class="d-flex flex-row-fluid flex-column flex-center p-10 pt-lg-20"> 
				<a href="../../demo9/dist/index.html" class="mb-10 mb-lg-20">
					<img alt="Logo" src="assets/media/logos/logotipo1.png" class="h-40px" />
				</a> 
				<div class="stepper-nav"> 
					<div class="stepper-item current" data-kt-stepper-element="nav"> 
						<div class="stepper-line w-40px"></div> 
						<div class="stepper-icon w-40px h-40px">
							<i class="stepper-check fas fa-check"></i>
							<span class="stepper-number">1</span>
						</div> 
						<div class="stepper-label">
							<h3 class="stepper-title">Tipo de Conta</h3>
						</div> 
					</div> 
					<div class="stepper-item" data-kt-stepper-element="nav"> 
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
				<form class="my-auto pb-5" novalidate="novalidate" id="kt_create_account_form">
				 
					
					<div class="current" data-kt-stepper-element="content"> 
						<div class="w-100"> 
							<div class="pb-10 pb-lg-15"> 
								<h2 class="fw-bolder d-flex align-items-center text-dark">Escolha seu tipo de Conta
								<i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Selecione o tipo de conta conforme documento utilizado"></i></h2>
							 
								<div class="text-muted fw-bold fs-6">Esta conta será a conta cadastrada para a assinatura do sistema.
								<a href="#" target="_blank" class="link-primary fw-bolder">Saiba mais</a>.</div>
						 
							</div> 
							<div class="fv-row"> 
								<div class="row"> 
									<div class="col-lg-6"> 
										<input   @click="jms = false"  type="radio" class="btn-check" name="account_type" value="personal"  id="kt_create_account_form_account_type_personal" />
										<label class="btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center mb-10" for="kt_create_account_form_account_type_personal">
										 <span class="svg-icon svg-icon-3x me-5">
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
													<path d="M20 14H18V10H20C20.6 10 21 10.4 21 11V13C21 13.6 20.6 14 20 14ZM21 19V17C21 16.4 20.6 16 20 16H18V20H20C20.6 20 21 19.6 21 19ZM21 7V5C21 4.4 20.6 4 20 4H18V8H20C20.6 8 21 7.6 21 7Z" fill="black" />
													<path opacity="0.3" d="M17 22H3C2.4 22 2 21.6 2 21V3C2 2.4 2.4 2 3 2H17C17.6 2 18 2.4 18 3V21C18 21.6 17.6 22 17 22ZM10 7C8.9 7 8 7.9 8 9C8 10.1 8.9 11 10 11C11.1 11 12 10.1 12 9C12 7.9 11.1 7 10 7ZM13.3 16C14 16 14.5 15.3 14.3 14.7C13.7 13.2 12 12 10.1 12C8.10001 12 6.49999 13.1 5.89999 14.7C5.59999 15.3 6.19999 16 7.39999 16H13.3Z" fill="black" />
												</svg>
											</span>
										 <span class="d-block fw-bold text-start">
												<span class="text-dark fw-bolder d-block fs-4 mb-2">Pessoa Física</span>
											</span>
										 </label>
								 </div>
									 <div class="col-lg-6">
										 <input  @click="jms = true" type="radio" class="btn-check" name="account_type" value="corporate" checked="checked" id="kt_create_account_form_account_type_corporate" />
										<label class="btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center" for="kt_create_account_form_account_type_corporate">
											 <span class="svg-icon svg-icon-3x me-5">
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
													<path opacity="0.3" d="M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z" fill="black" />
													<path d="M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z" fill="black" />
												</svg>
											</span>
										 <span class="d-block fw-bold text-start">
												<span class="text-dark fw-bolder d-block fs-4 mb-2">Pessoa Jurídica</span>
											</span>
									 </label>
									 </div>
								 </div>
							 </div>
						 </div>
				 </div>

					<div class="d-flex flex-stack pt-15">
						<div class="mr-2">
						 
						</div>
						<div>
							 
							<a @click="addcnpj()" type="button" class="btn btn-lg btn-primary">Continuar
						 <span class="svg-icon svg-icon-4 ms-1">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
									<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
									<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
								</svg>
							</span>
						 </a>
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
			cnpj: null,
			tipo: null,
				valor: null,
				email: null,
				jms: true

        }
    },
	methods: {
	

		addcnpj() {
			window.localStorage.setItem("cnpj", this.jms )
			window.location.href = "#/checkout_perfil"
				   },

		descartavel() {
			this.tipo = window.localStorage.setItem("tipo", this.tipo)
			this.valor = window.localStorage.setItem("valor", this.valor)
			this.email = window.localStorage.setItem("email", this.email)
		}
       

    },
	
}

