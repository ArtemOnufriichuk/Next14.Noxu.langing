'use client';
import styled from 'styled-components';

const Wrapper = styled.div`
	&,
	svg {
		height: 0;
		width: 0;
		position: absolute;
		overflow: hidden;
	}
`;

const Sprite = () => (
	<Wrapper>
		<svg xmlns='http://www.w3.org/2000/svg'>
			<symbol viewBox='0 0 20 20' id='add_file'>
				<g clipPath='url(#clip0_358_165)'>
					<path
						d='M7.62067 20C6.13819 20.0004 4.68888 19.5612 3.45605 18.7378C2.22321 17.9145 1.26223 16.7441 0.694632 15.3746C0.127039 14.005 -0.021666 12.4979 0.267325 11.0439C0.556316 9.58987 1.27002 8.25419 2.31817 7.2058L7.93817 1.5833C8.96216 0.609516 10.3261 0.0744386 11.7391 0.0922266C13.1521 0.110015 14.5021 0.67926 15.5013 1.67851C16.5004 2.67776 17.0695 4.0279 17.0872 5.44087C17.1048 6.85384 16.5696 8.21776 15.5957 9.24163L9.97734 14.8608C9.34867 15.468 8.50666 15.804 7.63267 15.7964C6.75868 15.7888 5.92264 15.4382 5.30461 14.8202C4.68659 14.2022 4.33602 13.3661 4.32843 12.4921C4.32083 11.6181 4.65681 10.7761 5.26401 10.1475L10.589 4.8233L12.3557 6.5908L7.03151 11.9166C6.95192 11.9935 6.88843 12.0855 6.84476 12.1871C6.80108 12.2888 6.77809 12.3981 6.77713 12.5088C6.77617 12.6194 6.79726 12.7292 6.83916 12.8316C6.88106 12.934 6.94293 13.0271 7.02118 13.1053C7.09942 13.1835 7.19247 13.2454 7.29488 13.2873C7.39729 13.3292 7.50703 13.3503 7.61768 13.3493C7.72832 13.3484 7.83768 13.3254 7.93934 13.2817C8.04102 13.238 8.13297 13.1746 8.20984 13.095L13.8332 7.47746C14.1117 7.20841 14.3339 6.88657 14.4868 6.53073C14.6397 6.17488 14.7201 5.79216 14.7235 5.40488C14.7269 5.01761 14.6531 4.63355 14.5064 4.2751C14.3598 3.91665 14.1432 3.591 13.8693 3.31715C13.5955 3.04329 13.2698 2.82672 12.9114 2.68007C12.5529 2.53342 12.1689 2.45962 11.7816 2.46298C11.3943 2.46635 11.0116 2.54681 10.6557 2.69967C10.2999 2.85253 9.97806 3.07473 9.70901 3.3533L4.08317 8.97246C3.17238 9.91548 2.66841 11.1785 2.6798 12.4895C2.6912 13.8005 3.21704 15.0545 4.14408 15.9816C5.07112 16.9086 6.32518 17.4344 7.63617 17.4458C8.94715 17.4572 10.2102 16.9533 11.1532 16.0425L16.4773 10.7175L18.2498 12.485L12.9248 17.81C12.2285 18.5063 11.4014 19.0582 10.4912 19.434C9.58096 19.8099 8.60545 20.0022 7.62067 20Z'
						fill='#F62727'
					/>
				</g>
				<defs>
					<clipPath id='clip0_358_165'>
						<rect width='20' height='20' fill='white' />
					</clipPath>
				</defs>
			</symbol>
			<symbol viewBox='0 0 24 25' id='facebook'>
				<g clipPath='url(#clip0_303_3256)'>
					<path
						d='M12 0.242676C5.37264 0.242676 0 5.61532 0 12.2427C0 17.8702 3.87456 22.5924 9.10128 23.8894V15.9099H6.62688V12.2427H9.10128V10.6625C9.10128 6.5782 10.9498 4.68508 14.9597 4.68508C15.72 4.68508 17.0318 4.83436 17.5685 4.98316V8.30716C17.2853 8.2774 16.7933 8.26252 16.1822 8.26252C14.2147 8.26252 13.4544 9.00796 13.4544 10.9457V12.2427H17.3741L16.7006 15.9099H13.4544V24.1548C19.3963 23.4372 24.0005 18.378 24.0005 12.2427C24 5.61532 18.6274 0.242676 12 0.242676Z'
						fill='white'
					/>
				</g>
				<defs>
					<clipPath id='clip0_303_3256'>
						<rect width='24' height='24' fill='white' transform='translate(0 0.242676)' />
					</clipPath>
				</defs>
			</symbol>
			<symbol viewBox='0 0 24 25' id='instagram'>
				<g clipPath='url(#clip0_303_3074)'>
					<g clipPath='url(#clip1_303_3074)'>
						<path
							d='M23.9765 7.29782C23.9203 6.0226 23.7141 5.1459 23.4187 4.38622C23.1139 3.57984 22.6451 2.85789 22.0308 2.25773C21.4307 1.64824 20.704 1.17463 19.9069 0.874641C19.1429 0.579231 18.2707 0.373013 16.9955 0.316788C15.7108 0.255801 15.3029 0.241699 12.0444 0.241699C8.78596 0.241699 8.3781 0.255801 7.09811 0.312026C5.82289 0.368251 4.94619 0.574653 4.18669 0.869879C3.38013 1.17463 2.65819 1.64347 2.05803 2.25773C1.44853 2.85789 0.975104 3.5846 0.674933 4.38164C0.379524 5.1459 0.173305 6.01784 0.117081 7.29306C0.0560942 8.57781 0.0419922 8.98567 0.0419922 12.2441C0.0419922 15.5026 0.0560942 15.9105 0.112319 17.1905C0.168544 18.4657 0.374946 19.3424 0.670355 20.1021C0.975104 20.9084 1.44853 21.6304 2.05803 22.2306C2.65819 22.84 3.3849 23.3137 4.18193 23.6136C4.94619 23.9091 5.81813 24.1153 7.09354 24.1715C8.37334 24.2279 8.78138 24.2418 12.0399 24.2418C15.2983 24.2418 15.7062 24.2279 16.9862 24.1715C18.2614 24.1153 19.1381 23.9091 19.8976 23.6136C21.5105 22.99 22.7858 21.7148 23.4094 20.1021C23.7046 19.3378 23.911 18.4657 23.9672 17.1905C24.0234 15.9105 24.0375 15.5026 24.0375 12.2441C24.0375 8.98567 24.0328 8.57781 23.9765 7.29782ZM21.8153 17.0967C21.7636 18.2688 21.5668 18.9017 21.4027 19.3237C20.9994 20.3693 20.1696 21.1991 19.124 21.6024C18.702 21.7665 18.0645 21.9633 16.897 22.0148C15.6311 22.0712 15.2514 22.0851 12.0492 22.0851C8.84694 22.0851 8.46253 22.0712 7.20122 22.0148C6.02911 21.9633 5.39617 21.7665 4.97421 21.6024C4.4539 21.4101 3.98029 21.1053 3.59588 20.7068C3.19736 20.3176 2.89261 19.8488 2.70031 19.3285C2.53621 18.9065 2.33933 18.2688 2.28787 17.1015C2.23146 15.8356 2.21754 15.4557 2.21754 12.2535C2.21754 9.05123 2.23146 8.66681 2.28787 7.40569C2.33933 6.23358 2.53621 5.60064 2.70031 5.17868C2.89261 4.65819 3.19736 4.18476 3.60064 3.80016C3.98963 3.40164 4.45848 3.09689 4.97897 2.90478C5.40093 2.74068 6.03863 2.5438 7.20599 2.49216C8.47187 2.43593 8.85171 2.42183 12.0538 2.42183C15.2608 2.42183 15.6404 2.43593 16.9017 2.49216C18.0739 2.5438 18.7068 2.74068 19.1288 2.90478C19.6491 3.09689 20.1227 3.40164 20.5071 3.80016C20.9056 4.18934 21.2104 4.65819 21.4027 5.17868C21.5668 5.60064 21.7636 6.23816 21.8153 7.40569C21.8715 8.67158 21.8856 9.05123 21.8856 12.2535C21.8856 15.4557 21.8715 15.8308 21.8153 17.0967Z'
							fill='#F8F8F8'
						/>
						<path
							d='M12.0452 6.07861C8.64149 6.07861 5.87988 8.84004 5.87988 12.2439C5.87988 15.6478 8.64149 18.4092 12.0452 18.4092C15.4491 18.4092 18.2105 15.6478 18.2105 12.2439C18.2105 8.84004 15.4491 6.07861 12.0452 6.07861ZM12.0452 16.2432C9.83705 16.2432 8.04591 14.4523 8.04591 12.2439C8.04591 10.0356 9.83705 8.24464 12.0452 8.24464C14.2535 8.24464 16.0445 10.0356 16.0445 12.2439C16.0445 14.4523 14.2535 16.2432 12.0452 16.2432Z'
							fill='#F8F8F8'
						/>
						<path
							d='M19.8935 5.83483C19.8935 6.62967 19.249 7.27415 18.454 7.27415C17.6591 7.27415 17.0146 6.62967 17.0146 5.83483C17.0146 5.0398 17.6591 4.39551 18.454 4.39551C19.249 4.39551 19.8935 5.0398 19.8935 5.83483Z'
							fill='#F8F8F8'
						/>
					</g>
				</g>
				<defs>
					<clipPath id='clip0_303_3074'>
						<rect width='24' height='24' fill='white' transform='translate(0 0.242676)' />
					</clipPath>
					<clipPath id='clip1_303_3074'>
						<rect width='24.0002' height='24.0002' fill='white' transform='translate(0 0.241699)' />
					</clipPath>
				</defs>
			</symbol>
			<symbol viewBox='0 0 24 25' id='ball'>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M12 0.242676C5.37527 0.242676 0 5.61795 0 12.2427C0 18.8674 5.37527 24.2427 12 24.2427C18.6117 24.2427 24 18.8674 24 12.2427C24 5.61795 18.6117 0.242676 12 0.242676ZM19.9262 5.77413C21.3579 7.51816 22.217 9.74375 22.243 12.1516C21.9046 12.0865 18.5206 11.3967 15.1106 11.8262C15.0325 11.657 14.9675 11.4748 14.8894 11.2926C14.6811 10.798 14.4469 10.2904 14.2126 9.80885C17.9869 8.27308 19.705 6.06046 19.9262 5.77413ZM12 2.01274C14.603 2.01274 16.9848 2.98888 18.7939 4.58975C18.6117 4.85005 17.0629 6.91947 13.4186 8.28605C11.7397 5.20146 9.87855 2.67652 9.5922 2.28606C10.3601 2.10385 11.1671 2.01274 12 2.01274ZM7.63995 2.97586C7.91325 3.34029 9.73538 5.87825 11.4404 8.89775C6.65076 10.1733 2.42083 10.1473 1.96529 10.1473C2.62907 6.97153 4.77657 4.32944 7.63995 2.97586ZM1.74404 12.2557C1.74404 12.1516 1.74404 12.0475 1.74404 11.9434C2.18655 11.9563 7.15835 12.0214 12.2733 10.4857C12.5727 11.0583 12.846 11.644 13.1063 12.2296C12.9761 12.2687 12.8329 12.3078 12.7028 12.3468C7.41865 14.0518 4.60738 18.7112 4.3731 19.1017C2.7462 17.2926 1.74404 14.8848 1.74404 12.2557ZM12 22.4986C9.6312 22.4986 7.44469 21.6917 5.71367 20.3381C5.89588 19.9607 7.97827 15.952 13.757 13.9347C13.783 13.9216 13.7961 13.9216 13.8221 13.9087C15.2668 17.644 15.8525 20.7806 16.0087 21.6787C14.7722 22.2123 13.4186 22.4986 12 22.4986ZM17.7136 20.7416C17.6096 20.1168 17.0629 17.1234 15.7223 13.4401C18.9371 12.9325 21.7484 13.7655 22.0998 13.8826C21.6573 16.7329 20.0173 19.1928 17.7136 20.7416Z'
					fill='white'
				/>
			</symbol>
			<symbol viewBox='0 0 24 25' id='behance'>
				<g clipPath='url(#clip0_303_3277)'>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M0.562933 2.9378C0 4.0215 0 5.44522 0 8.29268V16.1927C0 19.0401 0 20.4639 0.562933 21.5475C1.03731 22.4608 1.78191 23.2054 2.69513 23.6797C3.77882 24.2427 5.20255 24.2427 8.05 24.2427H15.95C18.7975 24.2427 20.2212 24.2427 21.3049 23.6797C22.2181 23.2054 22.9627 22.4608 23.4371 21.5475C24 20.4639 24 19.0401 24 16.1927V8.29268C24 5.44522 24 4.0215 23.4371 2.9378C22.9627 2.02459 22.2181 1.27999 21.3049 0.805609C20.2212 0.242676 18.7975 0.242676 15.95 0.242676H8.05C5.20255 0.242676 3.77882 0.242676 2.69513 0.805609C1.78191 1.27999 1.03731 2.02459 0.562933 2.9378ZM8.57419 6.74269C9.02452 6.73433 9.4742 6.7805 9.91344 6.88019C10.2833 6.96093 10.6344 7.11118 10.9481 7.32294C11.2379 7.53352 11.4672 7.81662 11.6129 8.14382C11.7805 8.54617 11.8613 8.97931 11.8501 9.415C11.8692 9.8934 11.747 10.3668 11.4988 10.7763C11.2377 11.163 10.8769 11.4718 10.4545 11.67C11.0277 11.8245 11.527 12.1785 11.8625 12.6683C12.1846 13.1872 12.3465 13.7896 12.3279 14.4001C12.3386 14.8868 12.2379 15.3696 12.0337 15.8115C11.8449 16.197 11.5685 16.533 11.2266 16.7926C10.8745 17.0493 10.4784 17.2392 10.0578 17.3529C9.62166 17.4735 9.17109 17.5341 8.71856 17.533H3.75V6.74269H8.57419ZM8.2875 11.1069C8.64133 11.1215 8.98963 11.0156 9.27544 10.8065C9.41231 10.6847 9.51879 10.5325 9.58636 10.3621C9.65392 10.1918 9.6807 10.008 9.66456 9.82544C9.67372 9.61224 9.63127 9.39997 9.54081 9.20669C9.46408 9.0528 9.34477 8.92418 9.19706 8.83613C9.04746 8.7392 8.87938 8.67436 8.70344 8.64569C8.51254 8.60871 8.31829 8.59189 8.12387 8.5955H6.00087V11.1166H8.2875V11.1069ZM8.41125 15.7008C8.62523 15.7037 8.83877 15.6806 9.04719 15.6321C9.23765 15.59 9.41828 15.5118 9.57931 15.4018C9.73706 15.2917 9.86452 15.1437 9.94987 14.9714C10.0488 14.7516 10.0943 14.5115 10.0826 14.2708C10.104 14.0514 10.075 13.8301 9.99762 13.6237C9.92028 13.4173 9.79671 13.2313 9.63638 13.0801C9.29655 12.8298 8.88008 12.7058 8.45869 12.7294H6.00087V15.7008H8.41125ZM15.5337 15.6609C15.7104 15.8247 15.9185 15.9508 16.1454 16.0317C16.3724 16.1125 16.6133 16.1464 16.8537 16.1312C17.2349 16.1408 17.6086 16.0249 17.9173 15.8012C18.1685 15.6379 18.3587 15.3962 18.4584 15.1137H20.2534C20.0622 15.9179 19.5951 16.6297 18.9334 17.1253C18.2987 17.5466 17.5485 17.76 16.7871 17.7358C16.2436 17.7429 15.7042 17.6408 15.201 17.4354C14.7458 17.2455 14.3375 16.9586 14.0047 16.5946C13.6732 16.2131 13.4185 15.7712 13.2547 15.2931C13.0708 14.7587 12.9808 14.1965 12.9886 13.6314C12.9853 13.0758 13.0783 12.5238 13.2636 12C13.5126 11.2631 13.9886 10.624 14.6233 10.1744C15.2581 9.72478 16.0189 9.48782 16.7967 9.4975C17.3709 9.4855 17.9387 9.61989 18.4467 9.888C18.9058 10.1398 19.3019 10.4924 19.6051 10.9193C19.9153 11.3672 20.1376 11.87 20.2603 12.4008C20.3948 12.9709 20.4428 13.5579 20.4026 14.1423H15.0559C15.0126 14.6912 15.1839 15.2357 15.5337 15.6609ZM17.8795 11.5573C17.7299 11.4076 17.5499 11.2917 17.3517 11.2175C17.1536 11.1433 16.9418 11.1124 16.7307 11.1269C16.4506 11.1162 16.1725 11.1783 15.9236 11.307C15.7262 11.4157 15.552 11.5619 15.4107 11.7374C15.2855 11.9019 15.1922 12.0885 15.1357 12.2874C15.0847 12.4533 15.0529 12.6244 15.0408 12.7975H18.3525C18.3236 12.3463 18.1593 11.9142 17.8809 11.5579L17.8795 11.5573ZM18.7636 7.4632H14.6139V8.52401H18.7636V7.4632Z'
						fill='white'
					/>
				</g>
				<defs>
					<clipPath id='clip0_303_3277'>
						<rect width='24' height='24' fill='white' transform='translate(0 0.242676)' />
					</clipPath>
				</defs>
			</symbol>
			<symbol viewBox='0 0 24 25' id='linkedin'>
				<path
					d='M22.2234 0.242676H1.77187C0.792187 0.242676 0 1.01611 0 1.97236V22.5083C0 23.4646 0.792187 24.2427 1.77187 24.2427H22.2234C23.2031 24.2427 24 23.4646 24 22.513V1.97236C24 1.01611 23.2031 0.242676 22.2234 0.242676ZM7.12031 20.6942H3.55781V9.23799H7.12031V20.6942ZM5.33906 7.67705C4.19531 7.67705 3.27188 6.75361 3.27188 5.61455C3.27188 4.47549 4.19531 3.55205 5.33906 3.55205C6.47813 3.55205 7.40156 4.47549 7.40156 5.61455C7.40156 6.74893 6.47813 7.67705 5.33906 7.67705ZM20.4516 20.6942H16.8937V15.1255C16.8937 13.7989 16.8703 12.088 15.0422 12.088C13.1906 12.088 12.9094 13.5364 12.9094 15.0317V20.6942H9.35625V9.23799H12.7687V10.8036H12.8156C13.2891 9.90361 14.4516 8.95205 16.1813 8.95205C19.7859 8.95205 20.4516 11.3239 20.4516 14.4083V20.6942Z'
					fill='white'
				/>
			</symbol>
			<symbol viewBox='0 0 24 25' id='medium'>
				<path
					d='M23.9995 12.0703C23.9995 15.2496 23.4667 17.8285 22.8092 17.8285C22.1517 17.8285 21.6191 15.2503 21.6191 12.0703C21.6191 8.89025 22.152 6.31201 22.8092 6.31201C23.4665 6.31201 23.9995 8.89002 23.9995 12.0703Z'
					fill='white'
				/>
				<path
					d='M20.9632 12.0703C20.9632 15.6196 19.4479 18.4981 17.5788 18.4981C15.7096 18.4981 14.1943 15.6196 14.1943 12.0703C14.1943 8.52101 15.7094 5.64258 17.5785 5.64258C19.4477 5.64258 20.9629 8.52009 20.9629 12.0703'
					fill='white'
				/>
				<path
					d='M13.5374 12.0704C13.5374 15.8411 10.5069 18.8978 6.76884 18.8978C3.03073 18.8978 0 15.8404 0 12.0704C0 8.30035 3.0305 5.24268 6.76884 5.24268C10.5072 5.24268 13.5374 8.29966 13.5374 12.0704Z'
					fill='white'
				/>
			</symbol>
			<symbol viewBox='0 0 20 20' id='arrow'>
				<path d='M12.2197 6.03033C11.9268 5.73744 11.9268 5.26256 12.2197 4.96967C12.5126 4.67678 12.9874 4.67678 13.2803 4.96967L17.7803 9.46967C18.0732 9.76256 18.0732 10.2374 17.7803 10.5303L13.2803 15.0303C12.9874 15.3232 12.5126 15.3232 12.2197 15.0303C11.9268 14.7374 11.9268 14.2626 12.2197 13.9697L16.1893 10L12.2197 6.03033Z' />
			</symbol>
			<symbol viewBox='0 0 24 24' id='checkmark-red'>
				<path
					d='M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm5.707,8.707-7,7a1,1,0,0,1-1.414,0l-3-3a1,1,0,0,1,1.414-1.414L10,14.586l6.293-6.293a1,1,0,0,1,1.414,1.414Z'
					fill='#F62727'
				/>
			</symbol>
			<symbol viewBox='0 0 24 24' id='checkmark-green'>
				<path
					d='M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm5.707,8.707-7,7a1,1,0,0,1-1.414,0l-3-3a1,1,0,0,1,1.414-1.414L10,14.586l6.293-6.293a1,1,0,0,1,1.414,1.414Z'
					fill='#00A37C'
				/>
			</symbol>
			<symbol viewBox='0 0 24 24' id='checkmark-blue'>
				<path
					d='M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm5.707,8.707-7,7a1,1,0,0,1-1.414,0l-3-3a1,1,0,0,1,1.414-1.414L10,14.586l6.293-6.293a1,1,0,0,1,1.414,1.414Z'
					fill='#5988FF'
				/>
			</symbol>
			<symbol viewBox='0 0 24 24' id='checkmark-purple'>
				<path
					d='M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm5.707,8.707-7,7a1,1,0,0,1-1.414,0l-3-3a1,1,0,0,1,1.414-1.414L10,14.586l6.293-6.293a1,1,0,0,1,1.414,1.414Z'
					fill='#9F68E5'
				/>
			</symbol>
			<symbol viewBox='0 0 24 24' id='cross-ico'>
				<path d='M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z' />
			</symbol>
			<symbol viewBox='0 0 24 24' id='loading-ico'>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12H19C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5V7Z'
				/>
			</symbol>
			<symbol id='refresh' viewBox='0 0 20 20'>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M9.99998 15C7.24165 15 4.99998 12.7583 4.99998 9.99996H7.49998L4.16665 6.66663L0.833313 9.99996H3.33331C3.33331 13.6833 6.31665 16.6666 9.99998 16.6666C11.3083 16.6666 12.525 16.2833 13.55 15.6333L12.3333 14.4166C11.6416 14.7916 10.8416 15 9.99998 15ZM12.5 9.99996L15.8333 13.3333L19.1666 9.99996L16.6666 9.99996C16.6666 6.31663 13.6833 3.33329 9.99998 3.33329C8.69165 3.33329 7.47498 3.71663 6.44998 4.36663L7.66665 5.58329C8.35831 5.20829 9.15831 4.99996 9.99998 4.99996C12.7583 4.99996 15 7.24163 15 9.99996H12.5Z'
				/>
			</symbol>
			<symbol viewBox='0 0 24 24' id='file-ico'>
				<path d='M4.01 4C4.01 2.9 4.9 2 6 2H14L20 8V20C20 21.1 19.1 22 18 22H5.99C4.89 22 4 21.1 4 20L4.01 4ZM13 3.5V9H18.5L13 3.5Z' />
			</symbol>
			<symbol id='checkbox-checkmark' viewBox='0 0 24 24' width='16px' height='16px'>
				<path d='M 20.292969 5.2929688 L 9 16.585938 L 4.7070312 12.292969 L 3.2929688 13.707031 L 9 19.414062 L 21.707031 6.7070312 L 20.292969 5.2929688 z' />
			</symbol>
		</svg>
	</Wrapper>
);

export default Sprite;