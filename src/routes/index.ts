import * as shiki from 'shiki';
import { base } from '$app/paths';

export async function get({ url }) {
	shiki.setCDN(`${url.origin}/shiki/`);
	const highlighter = await shiki.getHighlighter({ theme: 'github-dark' });
	return {
		body: { data: highlighter.codeToHtml(`console.log('shiki');`, { lang: 'js' }) }
	};
}
