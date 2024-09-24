import Link from "next/link";

import { pricingData } from "@/app/(website)/constants";

import { Row } from "./table";
import { Paragraph } from "@/app/(website)/_components/ui/paragraph";

import { Button } from "@/components/ui/button";

export const TableMain = () => {
  return (
    <table className="hidden lg:table">
      <thead className="table-header-group">
        <tr className="table-row border-b">
          <th className="table-cell px-6 pt-0 pb-4"></th>
          {pricingData.map((plan, index) => (
            <th key={index} className="table-cell px-6 pt-0 pb-4">
              <div className="pb-4 flex items-center justify-start gap-x-2">
                <h3 className="text-xl font-semibold leading-8">{plan.name}</h3>
                {plan.isPopular && (
                  <span className="bg-[#D4D4FF] text-primary px-5 py-1 rounded-full text-sm font-medium">
                    Popular
                  </span>
                )}
              </div>
            </th>
          ))}
        </tr>

        <tr className="table-row">
          <th className="table-cell px-6 pt-8 pb-0"></th>
          {pricingData.map((plan, index) => (
            <th key={index} className="table-cell px-6 pt-8 pb-0 space-y-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-4xl md:text-5xl text-left">
                  {plan.price}
                  <span className="text-base font-medium text-gray-500 ml-2 tracking-wide text-nowrap">
                    per month
                  </span>
                </h3>
                <Paragraph size="sm" className="text-left">
                  {plan.description}
                </Paragraph>
              </div>
              <Button className="w-full" asChild>
                <Link href={plan.url}>Get started</Link>
              </Button>
            </th>
          ))}
        </tr>
      </thead>

      <tbody className="text-nowrap">
        {/* Overview */}
        <tr className="table-row">
          <td className="table-cell text-left px-6 pb-4 pt-12 text-primary text-sm font-medium">
            Overview
          </td>
          {[...Array(3)].map((_, index) => (
            <td key={index} className="px-6 pb-4 pt-12" />
          ))}
        </tr>

        {/* Basic Features */}
        <Row title="Basic Features" className="bg-[#F5F5FA]">
          {pricingData.map((plan, index) => (
            <td key={index} className="px-6 py-5 text-center">
              {plan.overview.basic_features ? (
                <span className="text-[#26A6A4] bg-[#B5F7F6] block rounded-full w-6 h-6 mx-auto p-[2px]">
                  ✔
                </span>
              ) : (
                "━"
              )}
            </td>
          ))}
        </Row>

        {/* Users */}
        <Row title="Users">
          {pricingData.map((plan, index) => (
            <td key={index} className="px-6 py-5 text-center text-gray-500">
              {plan.overview.users}
            </td>
          ))}
        </Row>

        {/* Individual Data */}
        <Row title="Individual Data" className="bg-[#F5F5FA]">
          {pricingData.map((plan, index) => (
            <td key={index} className="px-6 py-5 text-center text-gray-500">
              {plan.overview.Individual_data}
            </td>
          ))}
        </Row>

        {/* Support */}
        <Row title="Support">
          {pricingData.map((plan, index) => (
            <td key={index} className="px-6 py-5 text-center">
              {plan.overview.support ? (
                <span className="text-[#26A6A4] bg-[#B5F7F6] block rounded-full w-6 h-6 mx-auto p-[2px]">
                  ✔
                </span>
              ) : (
                "━"
              )}
            </td>
          ))}
        </Row>

        {/* Automated Workflows */}
        <Row title="Automated Workflows" className="bg-[#F5F5FA]">
          {pricingData.map((plan, index) => (
            <td key={index} className="px-6 py-5 text-center">
              {plan.overview.automated_workflows ? (
                <span className="text-[#26A6A4] bg-[#B5F7F6] block rounded-full w-6 h-6 mx-auto p-[2px]">
                  ✔
                </span>
              ) : (
                "━"
              )}
            </td>
          ))}
        </Row>

        {/* 200+ Integrations */}
        <Row title="200+ Integrations">
          {pricingData.map((plan, index) => (
            <td key={index} className="px-6 py-5 text-center">
              {plan.overview.integrations ? (
                <span className="text-[#26A6A4] bg-[#B5F7F6] block rounded-full w-6 h-6 mx-auto p-[2px]">
                  ✔
                </span>
              ) : (
                "━"
              )}
            </td>
          ))}
        </Row>

        {/* Reporting and analytics */}
        <tr className="table-row">
          <td className="table-cell text-left px-6 pb-4 pt-12 text-primary text-sm font-medium">
            Reporting and analytics
          </td>
          {[...Array(3)].map((_, index) => (
            <td key={index} className="px-6 pb-4 pt-12" />
          ))}
        </tr>

        {/* Analytics */}
        <Row title="Analytics" className="bg-[#F5F5FA]">
          {pricingData.map((plan, index) => (
            <td key={index} className="px-6 py-5 text-center text-gray-500">
              {plan.analytics.analytics}
            </td>
          ))}
        </Row>

        {/* Export reports */}
        <Row title="Export reports">
          {pricingData.map((plan, index) => (
            <td key={index} className="px-6 py-5 text-center">
              {plan.analytics.export_reports ? (
                <span className="text-[#26A6A4] bg-[#B5F7F6] block rounded-full w-6 h-6 mx-auto p-[2px]">
                  ✔
                </span>
              ) : (
                "━"
              )}
            </td>
          ))}
        </Row>

        {/* Scheduled reports */}
        <Row title="Scheduled reports" className="bg-[#F5F5FA]">
          {pricingData.map((plan, index) => (
            <td key={index} className="px-6 py-5 text-center">
              {plan.analytics.scheduled_reports ? (
                <span className="text-[#26A6A4] bg-[#B5F7F6] block rounded-full w-6 h-6 mx-auto p-[2px]">
                  ✔
                </span>
              ) : (
                "━"
              )}
            </td>
          ))}
        </Row>

        {/* API access */}
        <Row title="API access">
          {pricingData.map((plan, index) => (
            <td key={index} className="px-6 py-5 text-center">
              {plan.analytics.API_access ? (
                <span className="text-[#26A6A4] bg-[#B5F7F6] block rounded-full w-6 h-6 mx-auto p-[2px]">
                  ✔
                </span>
              ) : (
                "━"
              )}
            </td>
          ))}
        </Row>

        {/* Advanced reports */}
        <Row title="Advanced reports" className="bg-[#F5F5FA]">
          {pricingData.map((plan, index) => (
            <td key={index} className="px-6 py-5 text-center">
              {plan.analytics.advanced_reports ? (
                <span className="text-[#26A6A4] bg-[#B5F7F6] block rounded-full w-6 h-6 mx-auto p-[2px]">
                  ✔
                </span>
              ) : (
                "━"
              )}
            </td>
          ))}
        </Row>

        {/* Saved reports */}
        <Row title="Saved reports">
          {pricingData.map((plan, index) => (
            <td key={index} className="px-6 py-5 text-center">
              {plan.analytics.saved_reports ? (
                <span className="text-[#26A6A4] bg-[#B5F7F6] block rounded-full w-6 h-6 mx-auto p-[2px]">
                  ✔
                </span>
              ) : (
                "━"
              )}
            </td>
          ))}
        </Row>

        {/* Customer properties */}
        <Row title="Customer properties" className="bg-[#F5F5FA]">
          {pricingData.map((plan, index) => (
            <td key={index} className="px-6 py-5 text-center">
              {plan.analytics.customer_properties ? (
                <span className="text-[#26A6A4] bg-[#B5F7F6] block rounded-full w-6 h-6 mx-auto p-[2px]">
                  ✔
                </span>
              ) : (
                "━"
              )}
            </td>
          ))}
        </Row>

        {/* Custom fields */}
        <Row title="Custom fields">
          {pricingData.map((plan, index) => (
            <td key={index} className="px-6 py-5 text-center">
              {plan.analytics.custom_fields ? (
                <span className="text-[#26A6A4] bg-[#B5F7F6] block rounded-full w-6 h-6 mx-auto p-[2px]">
                  ✔
                </span>
              ) : (
                "━"
              )}
            </td>
          ))}
        </Row>

        {/* User access */}
        <tr className="table-row">
          <td className="table-cell text-left px-6 pb-4 pt-12 text-primary text-sm font-medium">
            User access
          </td>
          {[...Array(3)].map((_, index) => (
            <td key={index} className="px-6 pb-4 pt-12" />
          ))}
        </tr>

        {/* SSO/SAML authentication */}
        <Row title="SSO/SAML authentication" className="bg-[#F5F5FA]">
          {pricingData.map((plan, index) => (
            <td key={index} className="px-6 py-5 text-center">
              {plan.user_access.sso_saml ? (
                <span className="text-[#26A6A4] bg-[#B5F7F6] block rounded-full w-6 h-6 mx-auto p-[2px]">
                  ✔
                </span>
              ) : (
                "━"
              )}
            </td>
          ))}
        </Row>

        {/* Advanced permissions */}
        <Row title="Advanced permissions">
          {pricingData.map((plan, index) => (
            <td key={index} className="px-6 py-5 text-center">
              {plan.user_access.advanced_permissions ? (
                <span className="text-[#26A6A4] bg-[#B5F7F6] block rounded-full w-6 h-6 mx-auto p-[2px]">
                  ✔
                </span>
              ) : (
                "━"
              )}
            </td>
          ))}
        </Row>

        {/* Audit log */}
        <Row title="Audit log" className="bg-[#F5F5FA]">
          {pricingData.map((plan, index) => (
            <td key={index} className="px-6 py-5 text-center">
              {plan.user_access.audit_log ? (
                <span className="text-[#26A6A4] bg-[#B5F7F6] block rounded-full w-6 h-6 mx-auto p-[2px]">
                  ✔
                </span>
              ) : (
                "━"
              )}
            </td>
          ))}
        </Row>

        {/* Data history */}
        <Row title="Data history">
          {pricingData.map((plan, index) => (
            <td key={index} className="px-6 py-5 text-center">
              {plan.user_access.data_history ? (
                <span className="text-[#26A6A4] bg-[#B5F7F6] block rounded-full w-6 h-6 mx-auto p-[2px]">
                  ✔
                </span>
              ) : (
                "━"
              )}
            </td>
          ))}
        </Row>
      </tbody>

      <tfoot className="table-footer-group">
        <tr className="table-row">
          <td className="table-cell px-6 pt-10 pb-8"></td>
          {pricingData.map((plan, index) => (
            <td key={index} className="table-cell px-6 pt-10 pb-8">
              <div className="flex flex-col gap-y-3">
                <Button className="w-full">Get Started</Button>
                <Button className="w-full" variant="outline">
                  Contact Sales
                </Button>
              </div>
            </td>
          ))}
        </tr>
      </tfoot>
    </table>
  );
};
