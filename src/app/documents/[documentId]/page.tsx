import { Editor } from "./editor";

interface DocumentIdPageProps {
    params: Promise<{ documentId: string }>;
};

const DocumentIdPage = async ({ params }: DocumentIdPageProps ) => {
    const { documentId } = await (params);

    return (
        <div>
            Document ID: {documentId}
            <Editor />
        </div>
    )
}


export default DocumentIdPage;



// we do feth the ID by creating an interface to fetch the number here 