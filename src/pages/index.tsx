import Layout from '../components/Layout';
import BasicMeta from '../components/meta/BasicMeta';
import OpenGraphMeta from '../components/meta/OpenGraphMeta';
import TwitterCardMeta from '../components/meta/TwitterCardMeta';
import { SocialList } from '../components/SocialList';

export default function Index() {
	return (
		<Layout>
			<BasicMeta url={'/'} />
			<OpenGraphMeta url={'/'} />
			<TwitterCardMeta url={'/'} />
			<div className="container">
				<div>
					<h1>
						Hi, Welcome to Undirected Graph<span className="fancy">.</span>
					</h1>
					<span className="handle">
						A data structure analogous to my directionless, albeit
						connected thoughts.
					</span>
					<h2>
						A blog by{' '}
						<a href="https://tusharnankani.github.io/about">
							Tushar Nankani
						</a>
						<span className="fancy">.</span>
					</h2>
					<SocialList />
				</div>
			</div>
			<style jsx>{`
				.container {
					display: flex;
					align-items: center;
					justify-content: center;
					flex: 1 1 auto;
					padding: 0 1.5rem;
				}
				h1 {
					font-size: 2.5rem;
					margin: 1rem 0;
					font-weight: 500;
				}
				h2 {
					font-size: 1.75rem;
					font-weight: 400;
					line-height: 1.25;
					margin-top: 3.5rem;
				}
				.fancy {
					color: #15847d;
				}
				.handle {
					display: inline-block;
					margin-top: 0.5rem;
					color: #9b9b9b;
					letter-spacing: 0.04rem;
					max-width: 80vw;
				}

				@media (min-width: 769px) {
					h1 {
						font-size: 3rem;
					}
					h2 {
						font-size: 2.25rem;
					}
				}
			`}</style>
		</Layout>
	);
}
