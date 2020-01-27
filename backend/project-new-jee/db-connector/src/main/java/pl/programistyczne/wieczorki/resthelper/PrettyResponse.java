package pl.programistyczne.wieczorki.resthelper;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class PrettyResponse<T> {

	private final List<String> links;
	private String entityName;
	private final T response;

	public PrettyResponse(T aResponse) {
		this.entityName = aResponse.getClass().getSimpleName();
		this.response = aResponse;
		this.links = new ArrayList<>();
	}

	public List<String> getLinks() {
		return links;
	}

	public T getResponse() {
		return response;
	}

	public void setEntityName(String entityName) {
		this.entityName = entityName;
	}

	public String getEntityName() {
		return entityName;
	}

	public void addLink(String aMethodType, String aKey, String aValue) {
		links.add(aMethodType + "   " + aKey + ": " + aValue);
	}

	@Override
	public String toString() {
		return "ResponseUtil [links=" + Arrays.deepToString(links.toArray()) + ", response=" + response + "]";
	}
}
