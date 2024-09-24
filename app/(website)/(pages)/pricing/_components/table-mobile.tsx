import Link from "next/link";

import { pricingData } from "@/app/(website)/constants";

import { Row } from "./table";
import { Paragraph } from "@/app/(website)/_components/ui/paragraph";

import { Button } from "@/components/ui/button";

export const TableMobile = () => {
  return (
    <>
      {pricingData.map((plan, index) => (
        <table key={index} className="w-full block lg:hidden">
          <thead className="block">
            <tr className="block">
              <th className="block px-4">
                <div className="pb-4 flex items-center justify-start gap-x-2">
                  <h3 className="text-xl font-semibold leading-8">
                    {plan.name}
                  </h3>
                  {plan.isPopular && (
                    <span className="bg-[#D4D4FF] text-primary px-5 py-1 rounded-full text-sm font-medium">
                      Popular
                    </span>
                  )}
                </div>
              </th>
            </tr>

            <tr className="block">
              <th className="block px-4 space-y-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-5xl text-left">
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
            </tr>
          </thead>

          <tbody className="w-full block text-nowrap">
            {/* Overview */}
            <tr className="flex">
              <td className="block text-left px-4 pb-4 pt-12 text-primary text-sm font-medium">
                Overview
              </td>
              <td className="px-4 pb-4 pt-12 flex-1" />
            </tr>

            {/* Basic Features */}
            <Row title="Basic Features" className="bg-[#F5F5FA]">
              <td className="px-4 text-center flex-1">
                {plan.overview.basic_features ? (
                  <span className="text-[#26A6A4] bg-[#B5F7F6] block rounded-full w-6 h-6 ml-auto p-[2px]">
                    ✔
                  </span>
                ) : (
                  "━"
                )}
              </td>
            </Row>

            {/* Users */}
            <Row title="Users">
              <td className="px-4 text-right flex-1 text-gray-500">
                {plan.overview.users}
              </td>
            </Row>

            {/* Individual Data */}
            <Row title="Individual Data" className="bg-[#F5F5FA]">
              <td className="px-4 text-right flex-1 text-gray-500">
                {plan.overview.Individual_data}
              </td>
            </Row>

            {/* Support */}
            <Row title="Support">
              <td className="px-4 text-right flex-1">
                {plan.overview.support ? (
                  <span className="text-[#26A6A4] bg-[#B5F7F6] block rounded-full w-6 h-6 ml-auto p-[2px] text-center">
                    ✔
                  </span>
                ) : (
                  "━"
                )}
              </td>
            </Row>

            {/* Automated Workflows */}
            <Row title="Automated Workflows" className="bg-[#F5F5FA]">
              <td className="px-4 text-right flex-1">
                {plan.overview.automated_workflows ? (
                  <span className="text-[#26A6A4] bg-[#B5F7F6] block rounded-full w-6 h-6 ml-auto p-[2px] text-center">
                    ✔
                  </span>
                ) : (
                  "━"
                )}
              </td>
            </Row>

            {/* 200+ Integrations */}
            <Row title="200+ Integrations">
              <td className="px-4 text-right flex-1">
                {plan.overview.integrations ? (
                  <span className="text-[#26A6A4] bg-[#B5F7F6] block rounded-full w-6 h-6 ml-auto p-[2px] text-center">
                    ✔
                  </span>
                ) : (
                  "━"
                )}
              </td>
            </Row>

            {/* Reporting and analytics */}
            <tr className="flex">
              <td className="block text-left px-4 pb-4 pt-12 text-primary text-sm font-medium">
                Reporting and analytics
              </td>
              <td className="px-4 pb-4 pt-12 flex-1" />
            </tr>

            {/* Analytics */}
            <Row title="Analytics" className="bg-[#F5F5FA]">
              <td className="px-4 text-right flex-1 text-gray-500">
                {plan.analytics.analytics}
              </td>
            </Row>

            {/* Export reports */}
            <Row title="Export reports">
              <td className="px-4 text-right flex-1">
                {plan.analytics.export_reports ? (
                  <span className="text-[#26A6A4] bg-[#B5F7F6] block rounded-full w-6 h-6 ml-auto p-[2px] text-center">
                    ✔
                  </span>
                ) : (
                  "━"
                )}
              </td>
            </Row>

            {/* Scheduled reports */}
            <Row title="Scheduled reports" className="bg-[#F5F5FA]">
              <td className="px-4 text-right flex-1">
                {plan.analytics.scheduled_reports ? (
                  <span className="text-[#26A6A4] bg-[#B5F7F6] block rounded-full w-6 h-6 ml-auto p-[2px] text-center">
                    ✔
                  </span>
                ) : (
                  "━"
                )}
              </td>
            </Row>

            {/* API access */}
            <Row title="API access">
              <td className="px-4 text-right flex-1">
                {plan.analytics.API_access ? (
                  <span className="text-[#26A6A4] bg-[#B5F7F6] block rounded-full w-6 h-6 ml-auto p-[2px] text-center">
                    ✔
                  </span>
                ) : (
                  "━"
                )}
              </td>
            </Row>

            {/* Advanced reports */}
            <Row title="Advanced reports" className="bg-[#F5F5FA]">
              <td className="px-4 text-right flex-1">
                {plan.analytics.advanced_reports ? (
                  <span className="text-[#26A6A4] bg-[#B5F7F6] block rounded-full w-6 h-6 ml-auto p-[2px] text-center">
                    ✔
                  </span>
                ) : (
                  "━"
                )}
              </td>
            </Row>

            {/* Saved reports */}
            <Row title="Saved reports">
              <td className="px-4 text-right flex-1">
                {plan.analytics.saved_reports ? (
                  <span className="text-[#26A6A4] bg-[#B5F7F6] block rounded-full w-6 h-6 ml-auto p-[2px] text-center">
                    ✔
                  </span>
                ) : (
                  "━"
                )}
              </td>
            </Row>

            {/* Customer properties */}
            <Row title="Customer properties" className="bg-[#F5F5FA]">
              <td className="px-4 text-right flex-1">
                {plan.analytics.customer_properties ? (
                  <span className="text-[#26A6A4] bg-[#B5F7F6] block rounded-full w-6 h-6 ml-auto p-[2px] text-center">
                    ✔
                  </span>
                ) : (
                  "━"
                )}
              </td>
            </Row>

            {/* Custom fields */}
            <Row title="Custom fields">
              <td className="px-4 text-right flex-1">
                {plan.analytics.custom_fields ? (
                  <span className="text-[#26A6A4] bg-[#B5F7F6] block rounded-full w-6 h-6 ml-auto p-[2px] text-center">
                    ✔
                  </span>
                ) : (
                  "━"
                )}
              </td>
            </Row>

            {/* User access */}
            <tr className="flex">
              <td className="block text-left px-4 pb-4 pt-12 text-primary text-sm font-medium">
                User access
              </td>
              <td className="px-4 pb-4 pt-12 flex-1" />
            </tr>

            {/* SSO/SAML authentication */}
            <Row title="SSO/SAML authentication" className="bg-[#F5F5FA]">
              <td className="px-4 text-right flex-1">
                {plan.user_access.sso_saml ? (
                  <span className="text-[#26A6A4] bg-[#B5F7F6] block rounded-full w-6 h-6 ml-auto p-[2px] text-center">
                    ✔
                  </span>
                ) : (
                  "━"
                )}
              </td>
            </Row>

            {/* Advanced permissions */}
            <Row title="Advanced permissions">
              <td className="px-4 text-right flex-1">
                {plan.user_access.advanced_permissions ? (
                  <span className="text-[#26A6A4] bg-[#B5F7F6] block rounded-full w-6 h-6 ml-auto p-[2px] text-center">
                    ✔
                  </span>
                ) : (
                  "━"
                )}
              </td>
            </Row>

            {/* Audit log */}
            <Row title="Audit log" className="bg-[#F5F5FA]">
              <td className="px-4 text-right flex-1">
                {plan.user_access.audit_log ? (
                  <span className="text-[#26A6A4] bg-[#B5F7F6] block rounded-full w-6 h-6 ml-auto p-[2px] text-center">
                    ✔
                  </span>
                ) : (
                  "━"
                )}
              </td>
            </Row>

            {/* Data history */}
            <Row title="Data history">
              <td className="px-4 text-right flex-1">
                {plan.user_access.data_history ? (
                  <span className="text-[#26A6A4] bg-[#B5F7F6] block rounded-full w-6 h-6 ml-auto p-[2px] text-center">
                    ✔
                  </span>
                ) : (
                  "━"
                )}
              </td>
            </Row>
          </tbody>

          <tfoot className="block">
            <tr className="block">
              <td className="block px-4 pt-10 pb-8">
                <div className="flex flex-col gap-y-3">
                  <Button className="w-full">Get Started</Button>
                  <Button className="w-full" variant="outline">
                    Contact Sales
                  </Button>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      ))}
    </>
  );
};
