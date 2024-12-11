export const placeholders = () => {
  const proxy: IProxy = {
    id: 0,
    proxy_id: "N/A",
    parent_proxy_id: "N/A",
    package_id: "N/A",
    package_name: "N/A",
    rotation_time: "0",
    is_active: 0,
    re_new: 0,
    protocol: "N/A",
    protocol_port: 0,
    country_name: "Unknown",
    city_name: "Unknown",
    service_provider: "Unknown",
    username: "N/A",
    password: "N/A",
    ip_addr: "0.0.0.0",
    duration: 0,
    price: "0.00",
    expire_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    user_id: 0,
  };

  return { proxy };
};
