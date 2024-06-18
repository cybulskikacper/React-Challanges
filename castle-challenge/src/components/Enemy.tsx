export default function Enemy(props: {
	position: { top: any; left: any }
	orientation: string
	currentImage: string | undefined
}) {
	return (
		<div
			className="enemy"
			style={{
				top: `${props.position.top}px`,
				left: `${props.position.left}px`,
				transform: props.orientation === 'left' ? 'scaleX(-1)' : undefined,
			}}>
			<img src={props.currentImage} />
		</div>
	)
}
