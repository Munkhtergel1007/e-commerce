import Link from "next/link";

function AdminButton({ type, onclick, href }) {
	return (
		<>
			{type === "save" ? (
				<button
					onClick={onclick}
					className="inline p-3 bg-green-400 rounded-md text-white">
					SAVE
				</button>
			) : type === "delete" ? (
				<button
					onClick={onclick}
					className="inline p-3 bg-red-400 rounded-md text-white">
					DELETE
				</button>
			) : (
				type === "create" && (
					<Link href={href}>
						<button className="inline p-3 bg-green-400 rounded-md text-white">
							CREATE
						</button>
					</Link>
				)
			)}
		</>
	);
}

export default AdminButton;
