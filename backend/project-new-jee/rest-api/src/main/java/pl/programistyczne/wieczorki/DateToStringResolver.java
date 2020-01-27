package pl.programistyczne.wieczorki;

import java.text.SimpleDateFormat;

import javax.ws.rs.ext.ContextResolver;
import javax.ws.rs.ext.Provider;

import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.map.SerializationConfig;

@Provider
public class DateToStringResolver implements ContextResolver<ObjectMapper> {

	private final ObjectMapper objectMapper;

	public DateToStringResolver() {
		objectMapper = new ObjectMapper();
		objectMapper.configure(SerializationConfig.Feature.WRITE_DATES_AS_TIMESTAMPS, false);
		objectMapper.setDateFormat(new SimpleDateFormat("yyyy-MM-dd"));
	}

	@Override
	public ObjectMapper getContext(Class<?> objectType) {
		return objectMapper;

	}

}
