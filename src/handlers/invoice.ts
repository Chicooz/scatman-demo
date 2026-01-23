import { APIGatewayEvent, Context, Callback, Handler } from 'aws-lambda';

/**
 * Represents an invoice item.
 */
interface InvoiceItem {
    description: string;
    quantity: number;
    price: number;
}

/**
 * Represents an invoice.
 */
interface Invoice {
    id: string;
    customerName: string;
    items: InvoiceItem[];
    totalAmount: number;
}

/**
 * Calculates the total amount of an invoice based on its items.
 * @param items - The list of items in the invoice.
 * @returns The total amount of the invoice.
 */
const calculateTotalAmount = (items: InvoiceItem[]): number => {
    return items.reduce((total, item) => total + item.quantity * item.price, 0);
};

/**
 * Lambda function handler for creating an invoice.
 * @param event - The API Gateway event.
 * @param context - The Lambda context.
 * @param callback - The callback function.
 */
export const createInvoice: Handler<APIGatewayEvent, Invoice> = async (event: APIGatewayEvent, context: Context, callback: Callback) => {
    try {
        const body = JSON.parse(event.body || '{}');
        const { customerName, items }: { customerName: string; items: InvoiceItem[] } = body;

        if (!customerName || !Array.isArray(items)) {
            throw new Error('Invalid input: customerName and items are required.');
        }

        const totalAmount = calculateTotalAmount(items);
        const invoice: Invoice = {
            id: context.awsRequestId,
            customerName,
            items,
            totalAmount,
        };

        // Here you would typically save the invoice to a database
        // For this example, we will just return it

        callback(null, {
            statusCode: 201,
            body: JSON.stringify(invoice),
        });
    } catch (error) {
        callback(null, {
            statusCode: 400,
            body: JSON.stringify({ error: error.message }),
        });
    }
};