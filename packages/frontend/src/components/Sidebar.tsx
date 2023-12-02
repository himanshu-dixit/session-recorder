import { css } from "@emotion/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ThemeToggle from "./ThemeToggle";

const topMenu = [

	{
		id: "",
		href: "/",
		name: "home",
		MenuIcon: (
			<Home
				css={css`
					zoom: 0.54;
				`}
				className="mr-16"
			/>
		),
		selected: true,
	},
	{
		id: "",
		href: "/list/blog",
		name: "blog",
		MenuIcon: (
			<Blog
				css={css`
					zoom: 0.54;
				`}
				className="mr-16"
			/>
		),
		selected: false,
	},
	{
		id: "",
		href: "/list/essay",
		name: "essay",
		MenuIcon: <Map css={css``} className="ml-1 mr-10" />,
		selected: false,
	},
	// {
	// 	id: "",
	// 	name: "mental model",
	// 	MenuIcon: (
	// 		<Pane
	// 			css={css`
	// 				zoom: 0.54;
	// 			`}
	// 			className="mr-16"
	// 		/>
	// 	),
	// 	selected: false,
	// },
];

const playLink = [
	{
		id: "",
		name: "my stack",
		MenuIcon: (
			<Play
				css={css`
					zoom: 0.54;
				`}
				className="mr-16"
			/>
		),
		selected: false,
	},
	{
		id: "",
		name: "method in madness",
		MenuIcon: (
			<Play
				css={css`
					zoom: 0.54;
				`}
				className="mr-16"
			/>
		),
		selected: false,
	},
	{
		id: "",
		name: "on engineering",
		MenuIcon: (
			<Play
				css={css`
					zoom: 0.54;
				`}
				className="mr-16"
			/>
		),
		selected: false,
	},
];

const mobileMenu = css`
	justify-content: space-between;
`;

const topIconCss = css`
	zoom: 0.9;
	@media (min-width: 768px) {
		display: none;
	}
`;

function Github(props) {
	return (
		<svg width={13} height={13} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M3.413.252C4.257.064 5.28 0 6.5 0c1.22 0 2.243.064 3.087.252.852.19 1.56.512 2.104 1.057.545.544.868 1.252 1.057 2.104.188.844.252 1.868.252 3.087 0 1.22-.065 2.243-.252 3.087-.19.852-.512 1.56-1.057 2.104-.544.545-1.252.868-2.104 1.057C8.743 12.936 7.72 13 6.5 13c-1.22 0-2.243-.065-3.087-.252-.852-.19-1.56-.512-2.104-1.057C.764 11.147.44 10.44.252 9.587.064 8.743 0 7.72 0 6.5c0-1.22.064-2.243.252-3.087.19-.852.512-1.56 1.057-2.104C1.853.764 2.56.44 3.413.252zm.183 3.053l.002-.001.004-.001.006-.003.014-.004a.771.771 0 01.102-.027c.31-.06.828-.006 1.576.501l.056.039.077-.018a4.812 4.812 0 012.211.018L7.7 3.77c.745-.505 1.261-.56 1.572-.5a.875.875 0 01.104.026l.014.005.007.002.003.001H9.4l.001.001h.001a.65.65 0 01.395.421 3.117 3.117 0 01.13 1.621c.019.03.037.062.055.094.28.488.424 1.056.417 1.632-.001 1.241-.328 2.125-.928 2.711-.587.574-1.336.76-1.955.835h-.001a6.41 6.41 0 01-2.036.019l-.02-.003c-.617-.084-1.359-.28-1.94-.856-.594-.589-.919-1.47-.92-2.706a3.215 3.215 0 01.472-1.726 3.13 3.13 0 01.141-1.66.65.65 0 01.383-.382z"
				fill="#B1B1B1"
			/>
		</svg>
	);
}

export function Sidebar() {
	const [showMenu, setShowMenu] = React.useState(false);
	const { asPath } = useRouter();

	return (
		<div css={sideBarCSS(showMenu)} className={"flex flex-col noselect"} id="sidebar">
			<div className="flex items-center justify-between px-10">
				{!showMenu && <MenuIcon onClick={setShowMenu.bind(this, !showMenu)} css={topIconCss} />}

				{showMenu && (
					<CloseIcon
						onClick={setShowMenu.bind(this, !showMenu)}
						css={
							(topIconCss,
							css`
								zoom: 1;
								margin-left: -1rem;
							`)
						}
					/>
				)}

				<div className="flex items-center" css={mobileMenu}>
					<div
						className="flex justify-center items-center"
						css={css`
							height: 24rem;
							width: 24rem;
							font-weight: 900;
							font-size: 12rem;
							color: #fff;
							font-family: "Cera Pro";
							background: #ffffff1c;
							border-radius: 5rem;
							line-height: 1;
						`}
					>
						H
					</div>

					<span className="leading-none ml-8" css={nameCSS}>
						Himanshu
					</span>
				</div>

				{/* <ThemeToggle /> */}
			</div>

			<div
				className={"flex flex-col justify-between"}
				css={css`
					flex: 1;
				`}
				id="menu-items"
			>
				<div>
					<hr
						css={css`
							margin-top: 16rem;
							border: 0.4px solid #141415;
							width: calc(100% + 12px);
							margin-left: -6rem;

							@media (min-width: 768px) {
								display: none;
							}
						`}
					/>

					<div className="mt-40">
						{topMenu.map(({ id, name, MenuIcon, href = "/d" }, i) => {
							const selected = asPath === href || (asPath.includes("blog") && name === "blog");

							return (
								<Link href={href} key={i}>
									<a
										href={href}
										css={css`
											cursor: default;
										`}
										onClick={(e) => {
											setShowMenu(false);
										}}
									>
										<div css={menu(selected)} className="flex items-center px-12">
											{MenuIcon}
											<span className="mt-1">{name}</span>
										</div>
									</a>
								</Link>
							);
						})}
					</div>
				</div>

				<div css={bottomLink}>
					<LinkBottom link={"https://personal-gatsby-website-ce53.vercel.app/"} icon={null} title={"archive"} />
					<LinkBottom link={"https://twitter.com/1x_engineer"} icon={null} title={"twitter"} />
					<LinkBottom link={"https://github.com/himanshu-dixit"} icon={<Github className="mr-8" />} title={"github"} />

					<a href="mailto:hudixt@gmail.com">
						<div className="flex items-center">
							<ContactUS className="mr-8" />
							<span className="mt-1">Get in touch</span>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
}

export const LinkBottom = ({ icon, title, link }) => {
	return (
		<a href={link} target={"_blank"} rel="noreferrer">
			<div className="flex justify-between items-center">
				<span className="flex items-center">
					{icon}
					<span className="mt-2">{title}</span>{" "}
				</span>
				<ExternalLink
					css={css`
						zoom: 0.7;
					`}
				/>
			</div>
		</a>
	);
};
function MenuIcon(props) {
	return (
		<svg width={14} height={12} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M0 1a1 1 0 011-1h12a1 1 0 110 2H1a1 1 0 01-1-1zM0 6a1 1 0 011-1h6a1 1 0 010 2H1a1 1 0 01-1-1zM0 11a1 1 0 011-1h12a1 1 0 110 2H1a1 1 0 01-1-1z"
				fill="#878787"
			/>
		</svg>
	);
}

function CloseIcon(props) {
	return (
		<svg width={14} height={14} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M5.395 4.405a.7.7 0 00-.99.99L6.01 7 4.405 8.605a.7.7 0 00.99.99L7 7.99l1.605 1.605a.7.7 0 00.99-.99L7.99 7l1.605-1.605a.7.7 0 00-.99-.99L7 6.01 5.395 4.405zM3.675.271C4.585.07 5.687 0 7 0c1.313 0 2.416.07 3.325.271.917.204 1.68.552 2.266 1.139.586.586.934 1.348 1.138 2.265C13.93 4.585 14 5.687 14 7c0 1.313-.07 2.416-.271 3.325-.204.917-.552 1.68-1.138 2.266-.587.586-1.349.934-2.266 1.138C9.415 13.93 8.313 14 7 14c-1.313 0-2.416-.07-3.325-.271-.917-.204-1.68-.552-2.265-1.138-.587-.587-.935-1.349-1.139-2.266C.07 9.415 0 8.313 0 7c0-1.313.07-2.416.271-3.325.204-.917.552-1.68 1.139-2.265C1.996.823 2.758.475 3.675.27z"
				fill="#878787"
			/>
		</svg>
	);
}

function ContactUS(props) {
	return (
		<svg width={12} height={13} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M10.8.867H1.2C.55.867 0 1.423 0 2.082v6.686c0 .659.55 1.216 1.2 1.216h2.911l1.74 1.959a.198.198 0 00.298 0l1.74-1.96H10.8c.65 0 1.2-.556 1.2-1.215V2.082c0-.659-.55-1.215-1.2-1.215z"
				fill="#DFDFDF"
			/>
		</svg>
	);
}

const bottomLink = css`
	font-size: 13.5rem;
	display: flex;
	flex-direction: column;
	color: #d0d0d0;
	border-top: 0.5px solid rgba(255, 255, 255, 0.06);
	padding-top: 12rem;

	div {
		padding: 4px 10rem;
		border-radius: 8rem;

		:hover {
			background: rgba(217, 217, 217, 0.12);
			color: #fff;
		}
	}
`;

const heading = css`
	font-family: "Cera Pro";
	font-style: normal;
	font-weight: 400;
	font-size: 14rem;
	line-height: 18rem;
	/* identical to box height */

	color: #d0d0d0;
`;

function ExternalLink(props) {
	return (
		<svg width={12} height={12} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path fillRule="evenodd" clipRule="evenodd" d="M10.707 1.293a1 1 0 010 1.414l-9 9a1 1 0 01-1.414-1.414l9-9a1 1 0 011.414 0z" fill="#565656" />
			<path fillRule="evenodd" clipRule="evenodd" d="M2 1a1 1 0 011-1h7.475C11.317 0 12 .683 12 1.525V9a1 1 0 11-2 0V2H3a1 1 0 01-1-1z" fill="#565656" />
		</svg>
	);
}

function Play(props) {
	return (
		<svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M19.525 10.687h-.54V5.735c0-.366-.14-.718-.39-.977a1.309 1.309 0 00-.941-.404h-3.997a3.617 3.617 0 00-.912-2.23c-.547-.61-1.283-1.002-2.08-1.106-.455-.048-.915 0-1.352.145-.436.144-.84.38-1.184.693a3.445 3.445 0 00-.818 1.127c-.195.43-.303.896-.316 1.37H2.332c-.353 0-.692.146-.942.405-.25.26-.39.61-.39.977v5.642h1.872a2.04 2.04 0 011.405.508c.392.343.648.824.72 1.35.026.289-.007.58-.097.855a2.09 2.09 0 01-.423.74 2.003 2.003 0 01-.669.508c-.254.119-.53.181-.81.183H1v6.098c0 .366.14.717.39.977.25.259.589.404.942.404h15.322c.353 0 .692-.145.942-.404.25-.26.39-.61.39-.977v-4.026h.666c.467.002.93-.097 1.358-.293a3.338 3.338 0 001.126-.84c.314-.359.552-.782.698-1.243.146-.46.196-.947.149-1.43a3.596 3.596 0 00-1.158-2.234 3.358 3.358 0 00-2.3-.866z"
				fill="#BDBDBD"
			/>
		</svg>
	);
}

function Blog(props) {
	return (
		<svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<g clipPath="url(#prefix__clip0_503_30)">
				<path
					d="M22.964 9.28a11.168 11.168 0 00-2.893-5.008A11.099 11.099 0 0012.171 1a11.1 11.1 0 00-7.9 3.272c-4.356 4.356-4.356 11.444 0 15.8a11.17 11.17 0 005.008 2.894 1.012 1.012 0 00.98-.264l12.442-12.441c.256-.257.357-.63.263-.98zM5.707 5.71a9.081 9.081 0 016.464-2.678c2.442 0 4.737.951 6.464 2.678a9.161 9.161 0 011.786 2.525 11.163 11.163 0 00-8.968 3.22 11.164 11.164 0 00-3.22 8.968 9.16 9.16 0 01-2.526-1.786c-3.564-3.564-3.564-9.363 0-12.927z"
					fill="#BDBDBD"
				/>
			</g>
			<defs>
				<clipPath id="prefix__clip0_503_30">
					<path fill="#fff" transform="translate(1 1)" d="M0 0h22v22H0z" />
				</clipPath>
			</defs>
		</svg>
	);
}

export function Map(props) {
	return (
		<svg width={11} height={12} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M3.202.898a1.016 1.016 0 01.909 0L6.815 2.25a.207.207 0 00.182 0l2.096-1.048a1.016 1.016 0 011.47.908v6.763c0 .384-.218.737-.562.908l-2.64 1.32a1.015 1.015 0 01-.909 0L3.747 9.75a.203.203 0 00-.182 0L1.47 10.798A1.016 1.016 0 010 9.89V3.127c0-.385.217-.737.561-.909l2.64-1.32zm.454 1.852a.406.406 0 01.406.407v4.468a.406.406 0 01-.812 0V3.157a.406.406 0 01.406-.407zm3.656 1.625a.406.406 0 10-.812 0v4.47a.406.406 0 00.813 0v-4.47z"
				fill="#BDBDBD"
			/>
		</svg>
	);
}

function Home(props) {
	return (
		<svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M22.614 9.184L19.86 6.94V3.352a.734.734 0 00-.733-.733h-1.732a.734.734 0 00-.733.733v.982l-3.678-2.998A1.562 1.562 0 0011.998 1c-.37 0-.718.119-.983.334l-9.629 7.85c-.437.356-.41.667-.356.82.054.153.23.41.791.41H3.14v10.322c0 .737.598 1.336 1.332 1.336h4.164c.728 0 1.299-.587 1.299-1.336v-4.233c0-.363.333-.693.7-.693h2.797c.35 0 .633.31.633.693v4.233c0 .724.626 1.336 1.366 1.336h4.097c.735 0 1.332-.6 1.332-1.336V10.414h1.319c.562 0 .737-.257.791-.41.055-.153.081-.464-.356-.82z"
				fill="#BDBDBD"
			/>
		</svg>
	);
}

const menu = (selected: boolean) => css`
	box-sizing: border-box;
	height: 33rem;
	width: 100%;
	margin-bottom: 8rem;
	:hover {
		background: rgba(217, 217, 217, 0.12);
		outline: none;
	}

	color: #d0d0d0;
	path {
		fill: #d0d0d0;
	}
	${selected &&
	` 
    
	background: rgba(217, 217, 217, 0.12);
		outline: none;
    color: #fff;

    
    path{
        fill: #fff;
    }
    `}

	border-radius: 10rem;
	font-weight: 500;
	font-size: 13.5rem;
`;

const nameCSS = css`
	font-family: "Cera Pro";
	font-style: normal;
	font-weight: 700;
	color: #fff;
	font-size: 14rem;
	line-height: 14rem;
`;
const sideBarCSS = (showMenu) => css`
	background: var(--sidebarBG);
	min-width: 260rem;
	height: 100vh;
	border-right: 0.5px solid var(--sidebarBorder);
	padding: 16px 12px 12rem;
	position: fixed;

	@media (max-width: 768px) {
		width: 100%;

		height: min-content;
		z-index: 10;

		${showMenu &&
		`
        height: 100%;
         position: fixed;`}
		border-right: 0px solid var(--sidebarBorder);
		border-bottom: 1px solid var(--sidebarBorder);
		padding: 16px 16rem;
		#menu-items {
			display: none;
			${showMenu && `display: flex;`}
		}
	}
`;
