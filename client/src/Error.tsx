import { Home, ArrowLeft, RefreshCcw } from "lucide-react";
import { Link } from "react-router-dom";

interface IErrorModal {
    error: Error;
}

const ErrorModal = ({ error }: IErrorModal) => {
    return (
        <>
            <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 p-4 text-center">
                <div className="max-w-md space-y-6">
                    <div className="space-y-2">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">No redirection found</h1>
                        <p className="text-gray-500">
                            Sorry, but the requested redirection could not be found. This can have different
                            reasons.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="rounded-lg bg-white p-6 shadow-lg">
                            <h2 className="mb-2 text-xl font-semibold">Possible reasons:</h2>
                            <ul className="list-inside list-disc space-y-2 text-left text-sm text-gray-600">
                                <li>The link is possibly outdated or has been removed</li>
                                <li>There could be a typo in the URL</li>
                                <li>The redirection could possibly be configured incorrectly</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                            <Link to="/" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md shadow bg-white hover:bg-gray-100">
                                <Home className="mr-2 h-4 w-4" />
                                To the homepage
                            </Link>
                            <Link to="javascript:history.back()" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md shadow bg-white hover:bg-gray-100">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back
                            </Link>
                            <Link to="javascript:location.reload()" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md shadow bg-white hover:bg-gray-100">
                                <RefreshCcw className="mr-2 h-4 w-4" />
                                Reload page
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ErrorModal;
