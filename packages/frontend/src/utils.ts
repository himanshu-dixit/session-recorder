import fs from "fs";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";
import path from "path";
import remarkGFM from "remark-gfm";

export function getBlogFiles(postType: any) {
	return fs
		.readdirSync(path.join(process.cwd(), "content"))
		.map((file) => file.replace(/\.mdx$/, ""))
		.filter((slug) => {
			const source = fs.readFileSync(path.join(process.cwd(), "content", `${slug}/index.mdx`), "utf-8");
			const { data } = matter(source);
			if (!!postType) return postType === data.type;
			return true;
		});
}

export async function getBlog(slug: string) {
	const source = fs.readFileSync(path.join(process.cwd(), "content", `${slug}/index.mdx`), "utf-8");

	const filePath = path.join(process.cwd(), "content", `${slug}`);

	const { frontmatter, code } = await bundleMDX({
		source,
		cwd: filePath,
		xdmOptions(options) {
			options.remarkPlugins = [...options.remarkPlugins, remarkGFM];
			return options;
		},
	});

	return {
		frontmatter,
		mdx: code,
		readingTime: 1,
	};
}
