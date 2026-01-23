import { v4 as uuidv4 } from 'uuid';

/**
 * Represents an item in an invoice.
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
    items: InvoiceItem[];
    totalAmount: number;
}

/**
 * InvoiceService provides methods to manage invoices.
 */
class InvoiceService {
    private invoices: Invoice[] = [];

    /**
     * Creates a new invoice with the given items.
     * @param items - The items to include in the invoice.
     * @returns The created invoice.
     */
    public createInvoice(items: InvoiceItem[]): Invoice {
        const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);
        const invoice: Invoice = {
            id: uuidv4(),
            items,
            totalAmount,
        };
        this.invoices.push(invoice);
        return invoice;
    }

    /**
     * Retrieves an invoice by its ID.
     * @param id - The ID of the invoice to retrieve.
     * @returns The invoice if found, or undefined if not found.
     */
    public getInvoiceById(id: string): Invoice | undefined {
        return this.invoices.find(invoice => invoice.id === id);
    }

    /**
     * Retrieves all invoices.
     * @returns An array of all invoices.
     */
    public getAllInvoices(): Invoice[] {
        return this.invoices;
    }
}

export { InvoiceService, InvoiceItem, Invoice };