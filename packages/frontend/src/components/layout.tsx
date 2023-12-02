import { css } from "@emotion/react";
import { Sidebar } from "../../src/components/Sidebar";
import styles from "../../styles/Home.module.css";

export const Layout = ({ children }) => {
	return (
		<div className={styles.container}>
			<div className="flex " css={sidebarCSS}>

				<div css={mainArea}>{children}</div>
			</div>
		</div>
	);
};

const mainArea = css`

	width: 100%;

	overflow: scroll;
	max-height: 100vh;
`;

const sidebarCSS = css`
	@media (max-width: 768px) {
		display: block;
	}
`;
