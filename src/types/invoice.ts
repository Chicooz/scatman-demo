/**
 * Represents the different types of invoices.
 * @enum {string}
 */
export enum InvoiceType {
    SALE = "sale",
    PURCHASE = "purchase",
    SERVICE = "service",
    CREDIT = "credit",
}

/**
 * Represents an invoice item.
 */
export interface InvoiceItem {
    /** The unique identifier for the item */
    id: string;
    /** The description of the item */
    description: string;
    /** The quantity of the item */
    quantity: number;
    /** The price per unit of the item */
    unitPrice: number;
}

/**
 * Represents an invoice.
 */
export interface Invoice {
    /** The unique identifier for the invoice */
    id: string;
    /** The type of the invoice */
    type: InvoiceType;
    /** The date the invoice was issued */
    issueDate: Date;
    /** The due date for the invoice */
    dueDate: Date;
    /** The total amount for the invoice */
    totalAmount: number;
    /** The list of items included in the invoice */
    items: InvoiceItem[];
}

/**
 * Calculates the total amount of an invoice based on its items.
 * @param invoice - The invoice for which to calculate the total amount
 * @returns The total amount of the invoice
 */
export function calculateInvoiceTotal(invoice: Invoice): number {
    return invoice.items.reduce((total, item) => total + (item.quantity * item.unitPrice), 0);
}